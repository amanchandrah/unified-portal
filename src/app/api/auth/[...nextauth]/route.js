// src/app/api/auth/[...nextauth]/route.js
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import admin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";

// Initialize Firebase Admin
if (!admin.apps.length) {
  if (!process.env.FIREBASE_SERVICE_KEY) {
    throw new Error("FIREBASE_SERVICE_KEY is not defined!");
  }

  const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_KEY);

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  adapter: FirestoreAdapter(getFirestore()),
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  cookies: {
    sessionToken: {
      name: `__Secure-next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: true, // Ensure this is true in production
        domain: process.env.NEXTAUTH_URL?.replace(/https?:\/\//, "") || null,
      },
    },
  },
  callbacks: {
    async signIn({ profile }) {
      const email = profile.email;
      console.log("📧  Google email:", email);
      const ok =
        email?.endsWith("@iitm.ac.in") ||
        email?.endsWith("@ds.study.iitm.ac.in") ||
        email?.endsWith("@iitmparadox.org");
      console.log("✅  Allowed:", ok);
      return ok;
    },
    async session({ session, token }) {
      session.user.id = token?.sub ?? token?.id ?? null;
      return session;
    },
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url
      return `${baseUrl}/home?success=true`
    },
  },
  pages: {
    signIn: '/', // Set your login page path
  },
});

export { handler as GET, handler as POST };