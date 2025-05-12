
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Este middleware se ejecutará en todas las rutas
export function middleware(request: NextRequest) {
  // Obtiene la ruta actual
  const path = request.nextUrl.pathname;
  
  // Si ya estamos en la página principal, no hacer nada
  if (path === '/') {
    return NextResponse.next();
  }
  
  // Para cualquier otra ruta, redirigir a la página principal
  return NextResponse.redirect(new URL('/', request.url));
}

// Configuración para que el middleware se ejecute en todas las rutas
export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico|con.jpg|IMG.png).*)',
};  