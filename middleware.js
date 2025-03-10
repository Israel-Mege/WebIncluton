import { NextResponse } from 'next/server';

export function middleware(request) {
  // Obtener la URL actual
  const url = request.nextUrl.clone();
  
  // Si la URL termina con / y no es la raíz, redirigir a la versión sin /
  if (url.pathname.endsWith('/') && url.pathname !== '/') {
    url.pathname = url.pathname.slice(0, -1);
    return NextResponse.redirect(url);
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
} 