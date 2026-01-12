# Simplified API handler for Vercel/Railway deployment
# Connects to external Qdrant service, no local database deployment

import os
import json
from typing import Dict, Any, Optional
from fastapi import FastAPI, HTTPException, Request
from pydantic import BaseModel
import requests

# Initialize FastAPI app
app = FastAPI(
    title="Anirudh's Portfolio RAG API",
    description="Lightweight API connecting to external Qdrant service",
    version="1.0.0"
)

# Pydantic models
class QueryRequest(BaseModel):
    question: str
    top_k: int = 5

class IngestRequest(BaseModel):
    # Simplified for demo - in production you'd handle file uploads differently
    content: str
    source_id: str

class AlignmentRequest(BaseModel):
    job_description: str
    question: str

# Health check endpoint
@app.get("/")
async def root():
    return {
        "message": "Anirudh's Portfolio RAG API",
        "status": "running",
        "version": "1.0.0",
        "external_services": {
            "qdrant": os.getenv("QDRANT_URL", "Not configured"),
            "gemini": "Configured" if os.getenv("GEMINI_API_KEY") else "Not configured"
        }
    }

@app.get("/health")
async def health_check():
    return {
        "status": "healthy",
        "services": {
            "api": "online",
            "qdrant_connection": "configured" if os.getenv("QDRANT_URL") else "missing_config"
        }
    }

# RAG Query Endpoint
@app.post("/query")
async def query_documents(request: QueryRequest):
    """Query documents using external Qdrant service"""
    try:
        # Validate Qdrant configuration
        qdrant_url = os.getenv("QDRANT_URL")
        qdrant_api_key = os.getenv("QDRANT_API_KEY")
        
        if not qdrant_url:
            raise HTTPException(status_code=500, detail="QDRANT_URL not configured")
        
        # In a real implementation, you would:
        # 1. Generate embedding for the question
        # 2. Query Qdrant with the embedding
        # 3. Get relevant documents
        # 4. Use Gemini to generate answer
        
        # Mock response for now
        return {
            "answer": f"This would search for '{request.question}' in your Qdrant database and return relevant results.",
            "sources": ["external_qdrant_service"],
            "num_contexts": request.top_k,
            "note": "Demo response - connect to actual Qdrant service for real results"
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Query failed: {str(e)}")

# Document Ingestion Endpoint
@app.post("/ingest")
async def ingest_document(request: IngestRequest):
    """Ingest document content into external Qdrant"""
    try:
        qdrant_url = os.getenv("QDRANT_URL")
        
        if not qdrant_url:
            raise HTTPException(status_code=500, detail="QDRANT_URL not configured")
        
        # In a real implementation:
        # 1. Process document content
        # 2. Generate embeddings
        # 3. Store in Qdrant
        
        return {
            "message": f"Document '{request.source_id}' would be ingested into Qdrant",
            "status": "success",
            "note": "Demo response - actual implementation connects to external Qdrant"
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Ingestion failed: {str(e)}")

# Job Alignment Analysis
@app.post("/analyze_alignment")
async def analyze_job_alignment(request: AlignmentRequest):
    """Analyze job description alignment"""
    try:
        gemini_key = os.getenv("GEMINI_API_KEY")
        
        if not gemini_key:
            raise HTTPException(status_code=500, detail="GEMINI_API_KEY not configured")
        
        # Mock analysis response
        analysis_response = f"""
        Job Alignment Analysis:
        
        Based on the job description and Anirudh's profile, here's the analysis:
        
        Match Score: 85%
        
        Key Strengths:
        • Cloud technologies (AWS, GCP) - Strong match
        • Backend development (Java, Python) - Excellent fit
        • Microservices architecture - Highly relevant
        • Enterprise experience - Valuable background
        
        Recommendations:
        • Highlight cloud migration projects
        • Emphasize technical leadership experience
        • Showcase problem-solving capabilities
        """
        
        return {
            "analysis": analysis_response.strip(),
            "match_score": 85,
            "processed": True,
            "note": "Demo analysis - production version uses actual Gemini API"
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Analysis failed: {str(e)}")

# Catch-all handler for Vercel serverless functions
@app.api_route("/{path:path}", methods=["GET", "POST", "PUT", "DELETE"])
async def catch_all(request: Request, path: str):
    """Handle any unmatched routes"""
    return {
        "error": "Endpoint not found",
        "requested_path": path,
        "available_endpoints": [
            "GET /",
            "GET /health", 
            "POST /query",
            "POST /ingest",
            "POST /analyze_alignment"
        ]
    }

# Vercel serverless function handler
def handler(event, context):
    """Entry point for Vercel serverless functions"""
    try:
        # Simple routing for Vercel
        path = event.get('path', '/')
        method = event.get('httpMethod', 'GET')
        
        if path == '/' and method == 'GET':
            return {
                'statusCode': 200,
                'headers': {'Content-Type': 'application/json'},
                'body': json.dumps({
                    'message': 'RAG API is running!',
                    'status': 'success',
                    'platform': 'vercel-serverless'
                })
            }
        else:
            return {
                'statusCode': 404,
                'headers': {'Content-Type': 'application/json'},
                'body': json.dumps({'error': 'Endpoint not found'})
            }
            
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json'},
            'body': json.dumps({'error': str(e)})
        }

if __name__ == "__main__":
    print("Starting lightweight RAG API...")
    print("External Qdrant URL:", os.getenv("QDRANT_URL", "Not set"))
    print("Available endpoints: /, /health, /query, /ingest, /analyze_alignment")