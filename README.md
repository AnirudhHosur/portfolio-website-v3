# Production RAG Chatbot - Portfolio Website v3

A production-ready Retrieval-Augmented Generation (RAG) chatbot integrated with a modern portfolio website, featuring secure document ingestion, advanced UI components, and AI-powered career interaction.

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

1. **Modern Portfolio Website** (Next.js 16) - Professional showcase with responsive design
2. **AI-Powered RAG Chatbot** - Interactive career profile conversation
3. **Job Alignment Analysis** - Candidate-job matching for recruiters
4. **Secure Document Ingestion** - Protected PDF upload to Qdrant vector database
5. **Advanced UI/UX** - Shadcn/ui components with dark/light theme support

### 🌟 Key Features

- **👤 Professional Profile**: Personal introduction with profile picture
- **💬 Interactive Chat Interface**: Ask questions about career and expertise
- **🎯 Job Alignment Analysis**: AI-powered candidate-job matching
- **📁 Secure Document Ingestion**: Password-protected PDF upload to Qdrant
- **📱 Responsive Design**: Mobile-first approach with dark/light themes
- **🎨 Modern UI**: Shadcn/ui components with smooth animations
- **🔗 Dual-Panel Layout**: Separate sections for different functionalities
- **🔐 Access Control**: 4-digit passcode protection for document ingestion
- **⚡ Real-time Feedback**: Animated success notifications and loading states

## 🛠️ Tech Stack

### Backend
- **Python 3.12+**: Core development language
- **FastAPI**: High-performance web framework for REST APIs
- **Qdrant**: Cloud-native vector database for semantic search
- **Google Gemini 2.5 Flash**: State-of-the-art AI model for natural language generation
- **Sentence Transformers**: Efficient text embedding generation (all-MiniLM-L6-v2)
- **Pydantic**: Data validation and settings management

### Frontend
- **Next.js 16**: React framework with App Router and Image Optimization
- **TypeScript**: Type-safe JavaScript development
- **shadcn/ui**: Component library with Radix UI primitives
- **Tailwind CSS**: Utility-first CSS framework with dark mode support
- **Framer Motion**: Animation library for interactive UI elements
- **next-themes**: Automatic theme switching with system preference

### Infrastructure
- **Vercel**: Frontend deployment and hosting
- **Railway**: Backend deployment (FastAPI)
- **Qdrant Cloud**: Managed vector database for semantic search
- **Google AI Studio**: Gemini 2.5 Flash API for AI responses

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
- `POST /ingest` - Secure PDF document processing and storage
- `POST /query` - RAG-powered document and profile queries
- `POST /analyze_alignment` - Job description and candidate matching

### Frontend Routes
- `GET /` - Portfolio homepage with profile picture
- `GET /chat` - Dual-panel chat interface
- `GET /anirudhs-wall` - Secure document ingestion portal
- `POST /api/chat` - Chat proxy to backend
- `POST /api/ingest` - Document upload proxy
- `POST /api/analyze-alignment` - Job analysis proxy

## 🎨 UI Components

The interface uses shadcn/ui components for consistency:
- **Buttons**: Primary, secondary, and ghost variants
- **Cards**: Structured content containers
- **Inputs**: Textareas with proper validation
- **Badges**: Status indicators and labels
- **Navigation**: Responsive navbar with theme toggle

## 🌐 Deployment

### Live Demo
- **Frontend**: [anirudhhosur.vercel.app](https://anirudhhosur.vercel.app)
- **Backend**: [portfolio-website-v3-production.up.railway.app](https://portfolio-website-v3-production.up.railway.app)

### Vercel Deployment (Frontend)
**Environment Variables:**
```
BACKEND_URL=https://portfolio-website-v3-production.up.railway.app
NEXT_PUBLIC_BACKEND_URL=https://portfolio-website-v3-production.up.railway.app
```

**Configuration:**
- Framework: Next.js
- Root Directory: `frontend`
- Build Command: `npm run build`
- Install Command: `npm install`

### Railway Deployment (Backend)
**Environment Variables:**
```
QDRANT_URL=your-qdrant-cloud-url
QDRANT_API_KEY=your-qdrant-api-key
GEMINI_API_KEY=your-google-gemini-api-key
```

**Configuration:**
- Runtime: Python 3.12
- Entry Point: `main.py`
- Port: `$PORT` (Railway auto-assigned)

## 📊 Performance

### Typical Response Times
- **PDF Processing**: 2-5 seconds per document
- **Chat Responses**: 1-3 seconds (up to 50 seconds on free tier due to cold starts)
- **Job Analysis**: 2-4 seconds (up to 50 seconds on free tier due to cold starts)
- **Vector Search**: <100ms

### Free Tier Limitations
⚠️ **Heads up!** Responses may take 20-50 seconds due to cold starts on the free tier. This happens because deploying ML workloads is expensive, and I'm using Render's free tier. Thanks for your patience! 🙏

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

## 🚀 Recent Enhancements

✅ **Completed Features:**
- [x] Professional profile picture integration
- [x] Secure document ingestion with passcode protection
- [x] Enhanced UI with shadcn/ui components
- [x] Animated success notifications
- [x] Back navigation buttons
- [x] Responsive design improvements
- [x] Dark/light theme support
- [x] Password-protected Anirudh's Wall page

## 🚀 Future Enhancements

Planned improvements:
- [ ] Multi-language support
- [ ] Advanced analytics dashboard
- [ ] Customizable chat personas
- [ ] Integration with LinkedIn profile data
- [ ] Voice interaction capabilities
- [ ] Mobile app version

## 📊 System Architecture

```
┌─────────────────┐    ┌──────────────────┐    ┌──────────────────┐
│   Next.js 16    │────│   FastAPI        │────│   Qdrant Cloud   │
│   Frontend      │    │   Backend        │    │   Vector DB      │
│   (Vercel)      │    │   (Railway)      │    │                  │
└─────────────────┘    └──────────────────┘    └──────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌──────────────────┐    ┌──────────────────┐
│   shadcn/ui     │    │   Gemini 2.5     │    │   PDF Documents  │
│   Components    │    │   Flash API      │    │   & Embeddings   │
└─────────────────┘    └──────────────────┘    └──────────────────┘
```

---

Built with ❤️ using Python, FastAPI, Next.js 16, Qdrant, and Google Gemini 2.5 Flash