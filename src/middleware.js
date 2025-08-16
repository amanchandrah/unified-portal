import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: ({ token }) => !!token,
  },
  pages: {
    signIn: "/",
    error: "/",
  },
});

export const config = {
  matcher: [
    "/home/:path*",
    "/internal/:path*",
    "/updates/:path*",
    "/about/:path*",
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};