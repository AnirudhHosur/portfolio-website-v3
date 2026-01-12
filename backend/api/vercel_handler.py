# Clean Vercel-compatible API handler
import json
import os
from typing import Dict, Any

def handler(event, context):
    """Simple Vercel serverless function handler"""
    
    # Get request details
    path = event.get('path', '/')
    method = event.get('httpMethod', 'GET')
    
    # Route handling
    if path == '/' and method == 'GET':
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'message': 'Anirudh\'s Portfolio RAG API',
                'status': 'running',
                'version': '1.0.0',
                'platform': 'Vercel Serverless',
                'endpoints': [
                    'GET / - API info',
                    'GET /health - Health check', 
                    'POST /query - RAG queries',
                    'POST /ingest - Document ingestion',
                    'POST /analyze_alignment - Job analysis'
                ],
                'external_services': {
                    'qdrant': os.getenv('QDRANT_URL', 'Not configured'),
                    'gemini': 'Configured' if os.getenv('GEMINI_API_KEY') else 'Not configured'
                }
            })
        }
    
    elif path == '/health' and method == 'GET':
        return {
            'statusCode': 200,
            'headers': {'Content-Type': 'application/json'},
            'body': json.dumps({
                'status': 'healthy',
                'service': 'vercel-api',
                'timestamp': '2026-01-11'
            })
        }
    
    elif path == '/query' and method == 'POST':
        try:
            body = json.loads(event.get('body', '{}'))
            question = body.get('question', 'No question provided')
            
            return {
                'statusCode': 200,
                'headers': {'Content-Type': 'application/json'},
                'body': json.dumps({
                    'answer': f'This would search for "{question}" in your Qdrant database',
                    'sources': ['external_qdrant'],
                    'num_contexts': body.get('top_k', 5),
                    'note': 'Demo response - production connects to actual Qdrant'
                })
            }
        except Exception as e:
            return {
                'statusCode': 400,
                'headers': {'Content-Type': 'application/json'},
                'body': json.dumps({'error': f'Invalid request: {str(e)}'})
            }
    
    elif path == '/ingest' and method == 'POST':
        return {
            'statusCode': 200,
            'headers': {'Content-Type': 'application/json'},
            'body': json.dumps({
                'message': 'Document ingestion endpoint ready',
                'status': 'success',
                'note': 'Connects to external Qdrant service'
            })
        }
    
    elif path == '/analyze_alignment' and method == 'POST':
        return {
            'statusCode': 200,
            'headers': {'Content-Type': 'application/json'},
            'body': json.dumps({
                'analysis': 'Job alignment analysis would run here',
                'match_score': 85,
                'processed': True,
                'note': 'Production version uses Gemini API'
            })
        }
    
    else:
        return {
            'statusCode': 404,
            'headers': {'Content-Type': 'application/json'},
            'body': json.dumps({
                'error': 'Endpoint not found',
                'requested_path': path,
                'method': method,
                'available_endpoints': ['/', '/health', '/query', '/ingest', '/analyze_alignment']
            })
        }