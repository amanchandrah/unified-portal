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





// The NextAuth config object (unchanged)
const authOptions = {
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
  callbacks: {
    async signIn({ profile }) {
      const email = profile?.email || "";
      console.log("📧  Google email:", email);

      const allowedEmails = new Set([
        "ghostkillerdeadliest@gmail.com",
        "person2@yahoo.com",
        "admin@iitm.ac.in",
      ]);

      const ok =
        allowedEmails.has(email) ||
        email.endsWith("@iitm.ac.in") ||
        email.endsWith("@ds.study.iitm.ac.in") ||
        email.endsWith("@iitmparadox.org");

      console.log("✅  Allowed:", ok);
      return ok;
    },
    async session({ session, token }) {
      session.user.id = token?.sub ?? token?.id ?? null;
      return session;
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      try {
        const parsedUrl = new URL(url);
        if (parsedUrl.origin === baseUrl) return url;
      } catch {
        // fallback
      }
      return `${baseUrl}/home`;
    },
  },
  pages: {
    signIn: "/", // login page path
  },
};

// Handler for NextAuth
const handler = NextAuth(authOptions);

// Route exports
export { handler as GET, handler as POST };

// ✅ NEW: named export so other files can import authOptions
export { authOptions };