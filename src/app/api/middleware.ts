import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from './auth';

export async function middleware(req: NextRequest) {
  const token = req.headers.get('Authorization')?.split(' ')[1];
  
  if (!token || !verifyToken(token)) {
    return new NextResponse(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}