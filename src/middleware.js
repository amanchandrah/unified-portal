// utilities/middleware.js
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth({
  callbacks: {
    authorized: ({ token, req }) => {
      // Check if the path requires authentication
      const protectedPaths = [
        '/home',
        '/internal',
        '/updates',
        '/about'
      ];
      
      const isProtected = protectedPaths.some(path => 
        req.nextUrl.pathname.startsWith(path)
      );

      // If route is protected and no token exists, deny access
      if (isProtected && !token) {
        return false;
      }

      // Additional checks for email domain if needed
      if (token) {
        const email = token.email;
        const allowedDomains = [
          '@iitm.ac.in',
          '@ds.study.iitm.ac.in',
          '@iitmparadox.org'
        ];
        
        if (!allowedDomains.some(domain => email.endsWith(domain))) {
          return false;
        }
      }

      return true;
    },
  },
  pages: {
    signIn: '/',
    error: '/',
  },
});

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - API routes (api/)
     * - Static files (_next/static, _next/image)
     * - Favicon (favicon.ico)
     * - Login page (/)
     * - Public files in /public folder
     */
    '/((?!api|_next/static|_next/image|favicon.ico|$).*)',
  ],
};