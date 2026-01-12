from qdrant_client.models import VectorParams, Distance, PointStruct
from qdrant_client import QdrantClient
from dotenv import load_dotenv
import os

load_dotenv()

EMBED_DIM = 384  # MUST match embedding model


class QdrantStorage:
    def __init__(self, client: QdrantClient, collection: str = "docs"):
        self.client = client
        self.collection = collection

        if not self.client.collection_exists(self.collection):
            self.client.create_collection(
                collection_name=self.collection,
                vectors_config=VectorParams(
                    size=EMBED_DIM,
                    distance=Distance.COSINE,
                ),
            )

    def upsert(self, ids, vectors, payloads):
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
        results = self.client.query_points(
            collection_name=self.collection,
            query=query_vector,
            with_payload=True,
            limit=top_k,
        )

        contexts = []
        sources = set()

        # Handle the response from query_points
        for r in results.points:
            payload = r.payload or {}
            if "text" in payload:
                contexts.append(payload["text"])
                sources.add(payload.get("source", ""))

        return {
            "contexts": contexts,
            "sources": list(sources),
        }


# Global client instance
qdrant_client = QdrantClient(
    url=os.getenv("QDRANT_URL"),
    api_key=os.getenv("QDRANT_API_KEY"),
)

print(qdrant_client.get_collections())
