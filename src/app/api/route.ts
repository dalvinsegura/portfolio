import { NextRequest, NextResponse } from 'next/server';
import { getAIResponse } from '@/app/api/aiService';
import { middleware } from '@/app/api/middleware';

export async function POST(req: NextRequest) {
  await middleware(req);

  try {
    const { userPrompt } = await req.json();
    const response = await getAIResponse(userPrompt);
    return NextResponse.json({ response });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({ error: 'An error occurred while processing your request.' }, { status: 500 });
  }
}