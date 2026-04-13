import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const host = request.headers.get('host') || '';
  const xForwardedProto = request.headers.get('x-forwarded-proto') || 'http';
  
  // Skip middleware for localhost during development
  if (host.includes('localhost') || host.includes('127.0.0.1')) {
    return NextResponse.next();
  }

  const url = new URL(request.url);

  // 1. Force HTTPS
  // If the request is over HTTP, redirect to HTTPS
  if (xForwardedProto === 'http') {
    url.protocol = 'https:';
    return NextResponse.redirect(url, 301);
  }

  // Temporary: Disable www to non-www to diagnose redirect loop
  /*
  if (host.startsWith('www.')) {
    url.hostname = host.replace(/^www\./, '');
    if (url.toString() !== request.url) {
      return NextResponse.redirect(url, 301);
    }
  }
  */

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
     * - files with extensions (png, jpg, pdf, icon, etc)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.).*)',
  ],
};
