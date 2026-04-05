import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/request';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  // Redirect /studio to the hosted Sanity dashboard
  if (url.pathname.startsWith('/studio')) {
    return NextResponse.redirect('https://hearts-creation.sanity.studio', 307);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/studio/:path*'],
};
