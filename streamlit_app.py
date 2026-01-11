import asyncio
from pathlib import Path
import time

import streamlit as st
import requests
from dotenv import load_dotenv
import os

load_dotenv()

st.set_page_config(page_title="Chat with PDF - Anirudh Hosur", page_icon="❤️", layout="centered")


@st.cache_resource
def get_api_base() -> str:
    # Production API endpoint - update this to your deployed FastAPI service
    return os.getenv("FASTAPI_URL", "http://localhost:8000")


def save_uploaded_pdf(file) -> Path:
    uploads_dir = Path("uploads")
    uploads_dir.mkdir(parents=True, exist_ok=True)
    file_path = uploads_dir / file.name
    file_bytes = file.getbuffer()
    file_path.write_bytes(file_bytes)
    return file_path


def send_rag_ingest_event(pdf_path: Path) -> dict:
    api_base = get_api_base()
    url = f"{api_base}/ingest"
    
    # Read the PDF file
    with open(pdf_path, 'rb') as f:
        files = {'file': (pdf_path.name, f, 'application/pdf')}
        data = {'source_id': pdf_path.name}
        response = requests.post(url, files=files, data=data)
        response.raise_for_status()
        return response.json()


st.title("Upload a PDF to Ingest")
uploaded = st.file_uploader("Choose a PDF", type=["pdf"], accept_multiple_files=False)

if uploaded is not None:
    with st.spinner("Uploading and processing PDF..."):
        path = save_uploaded_pdf(uploaded)
        try:
            result = send_rag_ingest_event(path)
            st.success(f"Successfully ingested: {path.name}")
            st.json(result)
        except Exception as e:
            st.error(f"Error ingesting PDF: {str(e)}")
    st.caption("You can upload another PDF if you like.")

st.divider()
st.title("Ask a question about your PDFs")


def send_rag_query_event(question: str, top_k: int) -> dict:
    api_base = get_api_base()
    url = f"{api_base}/query"
    
    payload = {
        "question": question,
        "top_k": top_k
    }
    
    response = requests.post(url, json=payload)
    response.raise_for_status()
    return response.json()


# Removed Inngest-specific functions since we're using direct API calls now


with st.form("rag_query_form"):
    question = st.text_input("Your question")
    top_k = st.number_input("How many chunks to retrieve", min_value=1, max_value=20, value=5, step=1)
    submitted = st.form_submit_button("Ask")

    if submitted and question.strip():
        with st.spinner("Generating answer..."):
            try:
                result = send_rag_query_event(question.strip(), int(top_k))
                answer = result.get("answer", "")
                sources = result.get("sources", [])
                num_contexts = result.get("num_contexts", 0)
                
                st.subheader("Answer")
                st.write(answer or "(No answer generated)")
                
                if sources:
                    st.caption(f"Sources ({num_contexts} chunks used)")
                    for s in sources:
                        st.write(f"- {s}")
                        
            except Exception as e:
                st.error(f"Error querying documents: {str(e)}")
                st.info("Make sure your FastAPI backend is running and accessible.")
