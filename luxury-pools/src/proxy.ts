import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default function proxy(request: NextRequest) {
  const host = request.headers.get('host') || '';
  const xForwardedProto = request.headers.get('x-forwarded-proto') || 'http';
  
  // Skip middleware for localhost during development
  if (host.includes('localhost') || host.includes('127.0.0.1')) {
    return NextResponse.next();
  }

  let shouldRedirect = false;
  const url = new URL(request.url);

  // 1. Force non-www
  if (host.startsWith('www.')) {
    url.hostname = host.replace(/^www\./, '');
    shouldRedirect = true;
  }

  // 2. Force HTTPS (if not on local and forwarded as http)
  // Note: Only do this if we aren't already looping.
  if (xForwardedProto === 'http') {
    url.protocol = 'https:';
    shouldRedirect = true;
  }

  if (shouldRedirect) {
    // Ensure we don't redirect to the exact same URL
    if (url.toString() !== request.url) {
      return NextResponse.redirect(url, 301);
    }
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
     * - files with extensions (png, jpg, pdf, etc) - to avoid redirecting assets
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.).*)',
  ],
};
