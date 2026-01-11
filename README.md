# Production RAG Chatbot - Portfolio Website v3

A production-ready Retrieval-Augmented Generation (RAG) chatbot integrated with a modern portfolio website, enabling visitors to interact with Anirudh's professional profile through AI-powered conversation.

## 👨‍💻 About the Developer

**Anirudh Hosur** - Software Developer based in Calgary, AB

With over 4 years of experience in software development, cloud computing, and system design, I specialize in building scalable, high-performance applications using modern technologies. Currently working as a Software Developer at IBM Canada, I focus on delivering innovative enterprise solutions.

### 📍 Location
Calgary, Alberta, Canada

### 🔗 Connect With Me
- [LinkedIn](https://www.linkedin.com/in/anirudh-hosur-8b924315b/)
- [GitHub](https://github.com/AnirudhHosur)

### 🌐 Portfolio Websites
- **Latest Version**: [anirudhhosur.vercel.app](https://anirudhhosur.vercel.app/) (V3 - Current)
- **Previous Versions**: 
  - [anirudhhosur.netlify.app](https://anirudhhosur.netlify.app/) (V1)

## 🎯 Project Overview

This repository contains a full-stack application featuring:

1. **Modern Portfolio Website** (Next.js) - Showcases professional experience, skills, and projects
2. **AI-Powered RAG Chatbot** - Allows visitors to ask questions about Anirudh's career profile
3. **Job Alignment Analysis** - Enables recruiters to analyze candidate-job fit
4. **PDF Document Interaction** - Process and query resume documents using vector search

### 🌟 Key Features

- **Interactive Chat Interface**: Visitors can ask questions about professional background
- **Job Description Analysis**: Upload/Paste job descriptions for candidate matching
- **Dual-Panel Layout**: Separate sections for job analysis and general conversation
- **PDF Processing**: Ingest and query resume documents with semantic search
- **Dark/Light Theme**: Seamless theme switching with persistent preferences
- **Responsive Design**: Mobile-first approach working across all devices
- **Professional UI**: Built with shadcn/ui components and Tailwind CSS
- **TypeScript Support**: Full type safety throughout the application

## 🛠️ Tech Stack

### Backend
- **Python 3.12+**: Core development language
- **FastAPI**: High-performance web framework for REST APIs
- **Qdrant**: Cloud-native vector database for semantic search
- **Google Gemini 2.5 Flash**: State-of-the-art AI model for natural language generation
- **Sentence Transformers**: Efficient text embedding generation (all-MiniLM-L6-v2)
- **Pydantic**: Data validation and settings management

### Frontend
- **Next.js 16**: React framework with App Router
- **TypeScript**: Type-safe JavaScript development
- **shadcn/ui**: Component library for consistent, accessible UI
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for smooth transitions
- **next-themes**: Theme switching library

### Infrastructure
- **Vercel**: Deployment and hosting platform
- **Qdrant Cloud**: Managed vector database service
- **Google AI Studio**: Gemini API access

## 🚀 Quick Start

### Prerequisites
- Python 3.12+
- Node.js 18+
- Google Gemini API Key
- Qdrant Cloud account

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd Production-RAG-Chatbot
```

2. **Install backend dependencies**
```bash
pip install -r requirements.txt
```

3. **Install frontend dependencies**
```bash
cd frontend
npm install
```

4. **Configure environment variables**
Create a `.env` file in the project root:
```env
QDRANT_URL=https://your-qdrant-instance.qdrant.io
QDRANT_API_KEY=your_qdrant_api_key
GEMINI_API_KEY=your_google_gemini_api_key
```

5. **Run the application**

Backend (Terminal 1):
```bash
uvicorn main:app --reload --port 8000
```

Frontend (Terminal 2):
```bash
cd frontend
npm run dev
```

Visit `http://localhost:3000` to access the portfolio website with chat functionality.

## 📁 Project Structure

```
Production-RAG-Chatbot/
├── main.py              # FastAPI backend with RAG endpoints
├── data_loader.py       # PDF processing and embedding functions
├── vector_db.py         # Qdrant vector database operations
├── custom_types.py      # Pydantic models and type definitions
├── streamlit_app.py     # Legacy Streamlit interface (deprecated)
├── frontend/            # Next.js portfolio website
│   ├── app/             # App router pages
│   │   ├── chat/        # Chat interface page
│   │   └── api/         # API routes
│   ├── components/      # UI components
│   │   └── ui/          # shadcn/ui components
│   └── lib/             # Utility functions
├── requirements.txt     # Python dependencies
└── README.md           # This documentation
```

## 🤖 Chatbot Features

### General Conversation
Visitors can ask questions about:
- Work experience and professional background
- Technical skills and expertise
- Education and certifications
- Projects and achievements
- Career goals and interests

### Job Alignment Analysis
Recruiters can:
- Upload or paste job descriptions
- Get AI-powered candidate matching analysis
- Receive match scores and recommendations
- Identify strengths and skill gaps
- Get interview positioning advice

### Technical Capabilities
- Semantic search through resume content
- Context-aware response generation
- Vector similarity matching
- Real-time conversation interface

## 🔧 API Endpoints

### Backend Routes
- `POST /ingest` - Process and store PDF documents
- `POST /query` - Query documents with RAG
- `POST /analyze_alignment` - Job-candidate matching analysis

### Frontend Routes
- `GET /` - Portfolio homepage
- `GET /chat` - Interactive chat interface
- `POST /api/chat` - Proxy for backend queries

## 🎨 UI Components

The interface uses shadcn/ui components for consistency:
- **Buttons**: Primary, secondary, and ghost variants
- **Cards**: Structured content containers
- **Inputs**: Textareas with proper validation
- **Badges**: Status indicators and labels
- **Navigation**: Responsive navbar with theme toggle

## 🌐 Deployment

### Vercel Deployment (Frontend)
1. Connect GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on pushes to main branch

### Backend Deployment Options
- **Railway**: One-click deployment with environment management
- **Render**: Simple deployment with free tier support
- **Self-hosted**: Using Docker with reverse proxy

## 📊 Performance

### Typical Response Times
- **PDF Processing**: 2-5 seconds per document
- **Chat Responses**: 1-3 seconds
- **Job Analysis**: 2-4 seconds
- **Vector Search**: <100ms

### Scalability Features
- Vector database for efficient similarity search
- Batch processing for multiple documents
- Caching mechanisms for improved performance
- Horizontal scaling support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

### Development Guidelines
- Follow established coding standards
- Maintain type safety with TypeScript
- Update documentation for new features
- Ensure responsive design compatibility

## 📞 Support

For issues or questions:
- Open a GitHub issue
- Check the documentation
- Review FastAPI and Qdrant documentation

## 🚀 Future Enhancements

Planned improvements:
- [ ] Multi-language support
- [ ] Advanced analytics dashboard
- [ ] Customizable chat personas
- [ ] Integration with LinkedIn profile data
- [ ] Voice interaction capabilities
- [ ] Mobile app version

---

Built with ❤️ using Python, FastAPI, Next.js, Qdrant, and Google Gemini