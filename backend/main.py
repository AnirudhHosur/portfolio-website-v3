import logging
import uuid
from pathlib import Path
from fastapi import FastAPI, HTTPException, UploadFile, File, Form
from dotenv import load_dotenv

import inngest
import inngest.fast_api

from data_loader import load_and_chunk_pdf, embed_texts
from vector_db import QdrantStorage, qdrant_client
from custom_types import RAGChunkAndSrc, RAGUpsertResult, RAGSearchResult, RAGQueryResult
# Use Gemini adapter with auth_key from os env and the model also
import os
import google.generativeai as genai
load_dotenv()

app = FastAPI()

# Inngest client
inngest_client = inngest.Inngest(
    app_id="rag_app",
    logger=logging.getLogger("uvicorn"),
    is_production=False,
    serializer=inngest.PydanticSerializer(),
)

# Initialize storage
storage = QdrantStorage(client=qdrant_client)


@inngest_client.create_function(
    fn_id="RAG: Ingest PDF",
    trigger=inngest.TriggerEvent(event="rag/ingest_pdf"),
)
async def rag_ingest_pdf(ctx: inngest.Context):
    def _load() -> RAGChunkAndSrc:
        pdf_path = ctx.event.data["pdf_path"]
        source_id = ctx.event.data.get("source_id", pdf_path)
        chunks = load_and_chunk_pdf(pdf_path)
        return RAGChunkAndSrc(chunks=chunks, source_id=source_id)

    def _upsert(chunks_and_src: RAGChunkAndSrc) -> RAGUpsertResult:
        chunks = chunks_and_src.chunks
        source_id = chunks_and_src.source_id

        embeddings = embed_texts(chunks)

        ids = [
            str(uuid.uuid5(uuid.NAMESPACE_URL, f"{source_id}:{i}"))
            for i in range(len(chunks))
        ]

        payloads = [
            {"source": source_id, "text": chunks[i]}
            for i in range(len(chunks))
        ]

        storage.upsert(ids, embeddings, payloads)
        return RAGUpsertResult(ingested=len(chunks))

    chunks_and_src = await ctx.step.run(
        "load-and-chunk",
        _load,
        output_type=RAGChunkAndSrc,
    )

    result = await ctx.step.run(
        "embed-and-upsert",
        lambda: _upsert(chunks_and_src),
        output_type=RAGUpsertResult,
    )

    return result.model_dump()


@inngest_client.create_function(
    fn_id="RAG: Query PDF",
    trigger=inngest.TriggerEvent(event="rag/query_pdf_ai"),
)
async def rag_query_pdf_ai(ctx: inngest.Context):
    def _search(question: str, top_k: int = 5):
        query_vec = embed_texts([question])[0]
        store = QdrantStorage(client=qdrant_client)
        found = storage.search(query_vec, top_k)
        return RAGSearchResult(contexts=found["contexts"], sources=found["sources"])

    question = ctx.event.data["question"]
    top_k = int(ctx.event.data.get("top_k", 5))

    found = await ctx.step.run("embed-and-search", lambda: _search(question, top_k), output_type=RAGSearchResult)

    context_block = "\n\n".join(f"- {c}" for c in found.contexts)
    user_content = (
        "Use the following context to answer the question.\n\n"
        f"Context:\n{context_block}\n\n"
        f"Question: {question}\n"
        "Answer concisely using the context above."
    )

    genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
    model = genai.GenerativeModel('gemini-2.5-flash')

    # Prepare the prompt for Gemini
    response = model.generate_content(user_content)
    answer = response.text

    return {"answer": answer, "sources": found.sources, "num_contexts": len(found.contexts)}

# Direct API endpoints for Streamlit app
@app.post("/ingest")
async def ingest_pdf_endpoint(file: UploadFile = File(...), source_id: str = Form(...)):
    """Direct endpoint for PDF ingestion without Inngest"""    
    # Save uploaded file
    uploads_dir = Path("uploads")
    uploads_dir.mkdir(parents=True, exist_ok=True)
    file_path = uploads_dir / file.filename
    
    with open(file_path, "wb") as buffer:
        content = await file.read()
        buffer.write(content)
    
    try:
        # Process the PDF directly
        chunks = load_and_chunk_pdf(str(file_path))
        
        # Generate embeddings
        embeddings = embed_texts(chunks)
        
        # Generate IDs
        ids = [
            str(uuid.uuid5(uuid.NAMESPACE_URL, f"{source_id}:{i}"))
            for i in range(len(chunks))
        ]
        
        # Create payloads
        payloads = [
            {"source": source_id, "text": chunks[i]}
            for i in range(len(chunks))
        ]
        
        # Store in Qdrant
        storage.upsert(ids, embeddings, payloads)
        
        return {
            "message": f"Successfully ingested {len(chunks)} chunks from {file.filename}",
            "chunks_ingested": len(chunks),
            "source_id": source_id
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error processing PDF: {str(e)}")
    finally:
        # Clean up temporary file
        if file_path.exists():
            file_path.unlink()


@app.post("/query")
async def query_pdf_endpoint(request: dict):
    """Direct endpoint for RAG queries without Inngest"""
    try:
        question = request.get("question")
        top_k = int(request.get("top_k", 5))
        
        if not question:
            raise HTTPException(status_code=400, detail="Question is required")
        
        # Generate query embedding
        query_vec = embed_texts([question])[0]
        
        # Search in Qdrant
        found = storage.search(query_vec, top_k)
        
        # Prepare context for LLM
        context_block = "\n\n".join(f"- {c}" for c in found["contexts"])
        user_content = (
            "Use the following context to answer the question.\n\n"
            f"Context:\n{context_block}\n\n"
            f"Question: {question}\n"
            "Answer concisely using the context above."
        )
        
        # Get response from Gemini
        genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
        model = genai.GenerativeModel('gemini-2.5-flash')
        response = model.generate_content(user_content)
        answer = response.text
        
        return {
            "answer": answer,
            "sources": found["sources"],
            "num_contexts": len(found["contexts"])
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error processing query: {str(e)}")


@app.post("/analyze_alignment")
async def analyze_job_alignment(request: dict):
    """Analyze job description alignment with candidate resume"""
    try:
        job_description = request.get("job_description")
        question = request.get("question")
        
        if not job_description or not question:
            raise HTTPException(status_code=400, detail="Job description and question are required")
        
        # Simple mock analysis - in production, you'd implement actual comparison logic
        # This could involve:
        # 1. Extracting key requirements from job description
        # 2. Comparing with candidate's experience
        # 3. Generating detailed analysis
        
        analysis_prompt = f"""
        Job Description: {job_description}
        
        Question: {question}
        
        Based on Anirudh's resume (which includes experience with:
        - Cloud technologies (AWS, GCP)
        - Java, Python, TypeScript
        - Spring Boot, FastAPI
        - Microservices architecture
        - Enterprise software development
        - DevOps and CI/CD),
        
        Please provide:
        1. A match score (0-100%) indicating how well he fits
        2. Key strengths that align with the job
        3. Any gaps or areas to address
        4. Interview positioning advice
        5. Overall recommendation
        
        Respond in a structured format with clear sections.
        """
        
        genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
        model = genai.GenerativeModel('gemini-2.5-flash')
        response = model.generate_content(analysis_prompt)
        analysis_result = response.text
        
        return {
            "analysis": analysis_result,
            "match_score": 85,  # Mock score
            "processed": True
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error processing alignment analysis: {str(e)}")


# Add CORS middleware for Vercel deployment
@app.middleware("http")
async def add_cors_headers(request, call_next):
    response = await call_next(request)
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE, OPTIONS"
    response.headers["Access-Control-Allow-Headers"] = "*"
    return response

# Health check endpoint for monitoring
@app.get("/")
async def root():
    return {
        "message": "Anirudh's Portfolio RAG API is running!",
        "version": "1.0.0",
        "docs": "/docs"
    }

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

# Mount Inngest AFTER the function exists
inngest.fast_api.serve(app, inngest_client, [rag_ingest_pdf, rag_query_pdf_ai])
