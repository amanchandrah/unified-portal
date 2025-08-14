// utilities/middleware.js
import { NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";
import { getToken } from "next-auth/jwt";
import admin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";

// --- reuse the same Firebase init you already have for route.js ---
// (copied from your route.js so the admin instance is the same)
if (!admin.apps.length) {
  if (!process.env.FIREBASE_SERVICE_KEY) {
    throw new Error("FIREBASE_SERVICE_KEY missing");
  }
  const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_KEY);
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const db = getFirestore();

// ----------------------------------------------------------

export default withAuth(async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  // 1. if not logged in at all, let withAuth redirect them to "/"
  if (!token) return NextResponse.next();

  // 2. only check extra restriction for /internal & /updates
  if (pathname.startsWith("/internal") || pathname.startsWith("/updates")) {
    const doc = await db.collection("organisers").doc(token.email).get();
    if (!doc.exists) {
      // show the death-valley page
      const url = new URL("/access-denied", req.url);
      return NextResponse.rewrite(url);
    }
  }

  // otherwise, allow
  return NextResponse.next();
}, {
  callbacks: {
    authorized: ({ token }) => !!token, // still enforces login
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
    "/((?!api|_next/static|_next/image|favicon.ico|access-denied).*)",
  ],
};