import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get('host') || '';
  
  // Skip middleware for localhost during development
  if (host.includes('localhost') || host.includes('127.0.0.1')) {
    return NextResponse.next();
  }
  
  // 1. Force non-www
  if (host.startsWith('www.')) {
    const newHost = host.replace(/^www\./, '');
    url.host = newHost;
    return NextResponse.redirect(url, 301);
  }

  // 2. Force HTTPS
  const xForwardedProto = request.headers.get('x-forwarded-proto');
  if (xForwardedProto === 'http') {
    url.protocol = 'https:';
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
