import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

// Definir rutas públicas
const publicRoutes = ["/login", "/about", "/contact", "/"];

export default withAuth(
  async function middleware(req) {
    const { pathname } = req.nextUrl;

    // Si la ruta es pública, permitir el acceso sin autenticación
    if (publicRoutes.includes(pathname)) {
      return NextResponse.next();
    }

    // Obtener el token de sesión
    let session;
    try {
      session = await getToken({ req });
    } catch (error) {
      console.error("Error getting token:", error);
    }


    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: [
    "/quoter/:path*",
    "/user/:path*",
    "/compliance_officer",
  ],
};
