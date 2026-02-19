from qdrant_client.models import VectorParams, Distance, PointStruct
from qdrant_client import QdrantClient
from dotenv import load_dotenv
import os

load_dotenv()

EMBED_DIM = 768  # MUST match embedding model


class QdrantStorage:
    def __init__(self, client: QdrantClient = None, collection: str = "docs"):
        self.client = client
        self.collection = collection
        self._collection_initialized = False
        
        if self.client is None:
            raise ValueError("Qdrant client is not initialized. Check your QDRANT_URL and QDRANT_API_KEY environment variables.")
    
    def _ensure_collection_exists(self):
        """Ensure the collection exists, creating it if necessary."""
        if self._collection_initialized:
            return
        
        try:
            if not self.client.collection_exists(self.collection):
                self.client.create_collection(
                    collection_name=self.collection,
                    vectors_config=VectorParams(
                        size=EMBED_DIM,
                        distance=Distance.COSINE,
                    ),
                )
            self._collection_initialized = True
        except Exception as e:
            print(f"Warning: Could not initialize collection: {e}")
            raise

    def upsert(self, ids, vectors, payloads):
        self._ensure_collection_exists()
        points = [
            PointStruct(
                id=ids[i],
                vector=vectors[i],
                payload=payloads[i],
            )
            for i in range(len(ids))
        ]
        self.client.upsert(
            collection_name=self.collection,
            points=points,
        )

    def search(self, query_vector, top_k: int = 5):
        self._ensure_collection_exists()
        results = self.client.search(
            collection_name=self.collection,
            query_vector=query_vector,
            with_payload=True,
            limit=top_k,
        )

        contexts = []
        sources = set()

        for r in results:
            payload = r.payload or {}
            if "text" in payload:
                contexts.append(payload["text"])
                sources.add(payload.get("source", ""))

        return {
            "contexts": contexts,
            "sources": list(sources),
        }


# Global client instance - initialize without making API calls during import
try:
    qdrant_client = QdrantClient(
        url=os.getenv("QDRANT_URL"),
        api_key=os.getenv("QDRANT_API_KEY"),
    )
    # Do not make any API calls during import time to avoid startup failures
except Exception as e:
    print(f"Warning: Could not initialize Qdrant client: {e}")
    qdrant_client = None