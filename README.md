# Production RAG Chatbot

A production-ready Retrieval-Augmented Generation (RAG) chatbot that enables users to interact with their PDF documents using AI. The system leverages Google's Gemini AI to provide contextually relevant answers based on the content of uploaded PDFs.

## 🚀 Features

- **PDF Ingestion**: Upload and process PDF documents to extract text content
- **Vector Storage**: Store document embeddings in Qdrant vector database for efficient similarity search
- **AI-Powered Responses**: Use Google Gemini to generate answers based on document context
- **Workflow Orchestration**: Leverage Inngest for reliable, scalable workflow execution
- **FastAPI Backend**: Robust API server with real-time capabilities

## 🛠️ Tech Stack

- **Python 3.12+**: Core development language
- **FastAPI**: High-performance web framework
- **Inngest**: Workflow orchestration and event-driven architecture
- **Qdrant**: Vector database for semantic search
- **Google Gemini**: AI model for generating responses
- **LlamaIndex**: RAG pipeline framework
- **Sentence Transformers**: Text embedding generation
- **Uvicorn**: ASGI server

## 📋 Prerequisites

- Python 3.12 or higher
- Google Gemini API Key
- Qdrant Cloud account or self-hosted Qdrant instance

## 🚀 Setup

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd Production-RAG-Chatbot
```

### 2. Install dependencies

```bash
pip install -r requirements.txt
```

### 3. Set up environment variables

Create a `.env` file in the project root with the following variables:

```env
QDRANT_URL=your_qdrant_url
QDRANT_API_KEY=your_qdrant_api_key
GEMINI_API_KEY=your_gemini_api_key
```

### 4. Run the application

```bash
uvicorn main:app --reload
```

## 🏗️ Architecture

The application follows an event-driven architecture using Inngest:

1. **PDF Ingestion Workflow** (`RAG: Ingest PDF`):
   - Load PDF document
   - Chunk the content into smaller pieces
   - Generate embeddings using sentence transformers
   - Store embeddings in Qdrant vector database

2. **Query Workflow** (`RAG: Query PDF`):
   - Receive user question
   - Generate embedding for the question
   - Search for relevant content in Qdrant
   - Use Google Gemini to generate a response based on the context
   - Return the answer with source information

## 📁 Project Structure

```
Production-RAG-Chatbot/
├── main.py              # FastAPI application with Inngest workflows
├── data_loader.py       # PDF loading and text embedding functions
├── vector_db.py         # Qdrant vector database operations
├── custom_types.py      # Pydantic models for type definitions
├── requirements.txt     # Project dependencies
├── pyproject.toml       # Project configuration
└── README.md           # This file
```

## 🤖 Usage

### Ingesting PDFs

Trigger the `rag/ingest_pdf` event with the following payload:
```json
{
  "pdf_path": "/path/to/your/document.pdf",
  "source_id": "optional_source_identifier"
}
```

### Querying PDFs

Trigger the `rag/query_pdf_ai` event with the following payload:
```json
{
  "question": "Your question about the document",
  "top_k": 5
}
```

## 🔧 Configuration

### Qdrant Setup

1. Sign up for [Qdrant Cloud](https://cloud.qdrant.io/) or set up a local instance
2. Get your URL and API key
3. Add them to your `.env` file

### Gemini Setup

1. Get a Google Gemini API key from [Google AI Studio](https://aistudio.google.com/)
2. Add it to your `.env` file

## 🐙 GitHub Repository Setup

To create a public repository on GitHub:

1. Navigate to [GitHub](https://github.com/new)
2. Create a new public repository named "Production-RAG-Chatbot"
3. Add the following information:
   - Description: "Production-ready RAG chatbot for PDF document interaction using Google Gemini AI"
   - Initialize with a README (optional, since we already have one)
   - Add .gitignore for Python
   - Choose license (e.g., MIT)

### Git Commands

```bash
# Initialize git repository
git init

# Add all files
git add .

# Initial commit
git commit -m "feat: Initial commit with Production RAG Chatbot"

# Add remote origin (replace with your actual repository URL)
git remote add origin https://github.com/your-username/Production-RAG-Chatbot.git

# Push to main branch
git branch -M main
git push -u origin main
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

If you encounter any issues or have questions, please file an issue in the GitHub repository.

---

Built with ❤️ using Python, FastAPI, Inngest, and Google Gemini