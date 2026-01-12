# Load PDF and create embeddings using lightweight libraries

import PyPDF2
from sentence_transformers import SentenceTransformer
from dotenv import load_dotenv

load_dotenv()

EMBED_MODEL = "all-MiniLM-L6-v2"
EMBED_DIM = 384  # MUST match Qdrant collection dim

embed_model = SentenceTransformer(EMBED_MODEL)



def load_and_chunk_pdf(path: str) -> list[str]:
    """Load PDF and split into chunks using PyPDF2"""
    texts = []
    
    # Read PDF using PyPDF2
    with open(path, 'rb') as file:
        pdf_reader = PyPDF2.PdfReader(file)
        for page in pdf_reader.pages:
            text = page.extract_text()
            if text.strip():  # Only add non-empty pages
                texts.append(text)
    
    # Simple chunking - split by sentences or fixed size
    chunks = []
    for text in texts:
        # Split into chunks of approximately 1000 characters
        words = text.split()
        current_chunk = []
        current_length = 0
        
        for word in words:
            if current_length + len(word) + 1 > 1000 and current_chunk:
                # Save current chunk
                chunks.append(' '.join(current_chunk))
                current_chunk = [word]
                current_length = len(word)
            else:
                current_chunk.append(word)
                current_length += len(word) + 1
        
        # Don't forget the last chunk
        if current_chunk:
            chunks.append(' '.join(current_chunk))
    
    return chunks

def embed_texts(texts: list[str]) -> list[list[float]]:
    embeddings = embed_model.encode(texts)
    return embeddings.tolist()
