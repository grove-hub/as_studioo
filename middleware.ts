import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(_request: NextRequest) {
  // Password protection disabled - allow all requests
  return NextResponse.next();
}

export const config = {
  matcher: [],
};
