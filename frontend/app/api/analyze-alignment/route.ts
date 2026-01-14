import { NextRequest, NextResponse } from 'next/server';

const BACKEND_URL = process.env.BACKEND_URL;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { job_description, question } = body;

    if (!job_description || !question) {
      return NextResponse.json(
        { error: 'Job description and question are required' },
        { status: 400 }
      );
    }

    console.log('Forwarding job alignment request to backend');

    // Forward request to FastAPI backend analyze_alignment endpoint
    const response = await fetch(`${BACKEND_URL}/analyze_alignment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        job_description,
        question,
      }),
    }).catch(error => {
      console.error('Fetch error:', error);
      throw error;
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return NextResponse.json(
        { 
          error: 'Backend service error',
          details: errorData 
        },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);

  } catch (error) {
    console.error('Job alignment API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}