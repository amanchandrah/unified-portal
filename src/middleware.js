// utilities/middleware.js
import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: ({ token }) => !!token,
  },
  pages: {
    signIn: "/", // Force use of your custom login page
    error: "/", // Redirect errors back to login
  },
});

export const config = {
  matcher: [
    // Protect these sections
    "/home/:path*",
    "/internal/:path*",
    "/updates/:path*",
    "/about/:path*",

    // Exclude API routes, _next files, and favicon
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
