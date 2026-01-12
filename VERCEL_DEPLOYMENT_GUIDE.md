# Vercel Backend Deployment Guide

## Overview
This guide explains how to deploy your FastAPI backend to Vercel using the serverless function approach.

## Prerequisites
- Vercel account
- GitHub repository connected to Vercel
- Environment variables ready (QDRANT_URL, QDRANT_API_KEY, GEMINI_API_KEY)

## Deployment Steps

### 1. Project Structure
Your project should have this structure:
```
Production-RAG-Chatbot/
├── api/
│   └── main.py          # Vercel-compatible FastAPI app
├── data_loader.py       # Your existing modules
├── vector_db.py
├── custom_types.py
├── vercel.json          # Vercel configuration
└── requirements.txt
```

### 2. Environment Variables
Set these in your Vercel project settings:

```bash
QDRANT_URL=your-qdrant-cloud-url
QDRANT_API_KEY=your-qdrant-api-key
GEMINI_API_KEY=your-gemini-api-key
```

### 3. Deploy to Vercel

#### Option A: GitHub Integration (Recommended)
1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Vercel will automatically detect the vercel.json file
4. Set environment variables in Vercel dashboard
5. Deploy!

#### Option B: Manual Deployment
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### 4. API Endpoints
Once deployed, your API will be available at:
```
https://your-project-name.vercel.app/
```

Available endpoints:
- `GET /` - Health check and API info
- `GET /health` - Simple health endpoint
- `POST /ingest` - PDF document ingestion
- `POST /query` - RAG query endpoint
- `POST /analyze_alignment` - Job alignment analysis
- `GET /docs` - Interactive API documentation

### 5. Frontend Integration
Update your frontend `.env.local`:
```env
BACKEND_URL=https://your-vercel-api-url.vercel.app
```

## Important Notes

### File Size Limitations
- Vercel has 50MB limit for serverless functions
- Large dependencies might cause issues
- Consider using lighter alternatives if needed

### Cold Start
- Serverless functions have cold start delays
- First request might take 1-2 seconds longer
- Subsequent requests are faster

### Environment Variables
- Use Vercel's secret management for sensitive keys
- Reference them in vercel.json as `@variable_name`

### CORS Handling
The API includes CORS middleware for cross-origin requests from your frontend.

## Troubleshooting

### Common Issues:

1. **Module not found errors**
   - Ensure all dependencies are in requirements.txt
   - Check Python version compatibility

2. **Timeout errors**
   - Vercel functions timeout after 10 seconds
   - Optimize heavy operations or move to dedicated hosting

3. **Memory limits**
   - Vercel functions have 1GB memory limit
   - Monitor resource usage in Vercel dashboard

### Monitoring:
- Check Vercel logs for error details
- Use Vercel Analytics for performance monitoring
- Set up alerts for function errors

## Alternative Hosting Options

If Vercel doesn't meet your needs:

### Railway
```bash
# Railway deployment
railway init
railway up
```

### Render
- Similar setup with automatic deployments
- Better for long-running processes

### Self-hosted
- More control over resources
- Higher costs but better performance

## Testing Your Deployment

```bash
# Test health endpoint
curl https://your-api.vercel.app/health

# Test query endpoint
curl -X POST https://your-api.vercel.app/query \
  -H "Content-Type: application/json" \
  -d '{"question": "What is your experience?", "top_k": 5}'
```

Your backend is now ready for production use!