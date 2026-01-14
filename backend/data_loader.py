import os
from pypdf import PdfReader
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()

# Configure Gemini once
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

EMBED_MODEL = "models/text-embedding-004"
EMBED_DIM = 768  # Gemini embedding dimension


def load_and_chunk_pdf(path: str) -> list[str]:
    """Load PDF and split into ~1000 char chunks"""
    texts = []

    with open(path, "rb") as file:
        reader = PdfReader(file)
        for page in reader.pages:
            text = page.extract_text()
            if text and text.strip():
                texts.append(text.strip())

    chunks = []
    for text in texts:
        words = text.split()
        current_chunk = []
        current_length = 0

        for word in words:
            if current_length + len(word) + 1 > 1000:
                chunks.append(" ".join(current_chunk))
                current_chunk = [word]
                current_length = len(word)
            else:
                current_chunk.append(word)
                current_length += len(word) + 1

        if current_chunk:
            chunks.append(" ".join(current_chunk))

    return chunks


def embed_texts(texts: list[str]) -> list[list[float]]:
    """Generate embeddings using Gemini"""
    embeddings = []

    for text in texts:
        result = genai.embed_content(
            model=EMBED_MODEL,
            content=text,
            task_type="retrieval_document",
        )
        embeddings.append(result["embedding"])

    return embeddings
