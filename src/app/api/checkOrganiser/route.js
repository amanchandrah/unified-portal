import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route"; // adjust path if needed
import { getFirestore } from "firebase-admin/firestore";

export async function GET(req) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new Response(JSON.stringify({ allowed: false }), { status: 401 });
  }

  const db = getFirestore();
  const doc = await db.collection("organisers").doc(session.user.email).get();
  if (!doc.exists) {
    return new Response(JSON.stringify({ allowed: false }), { status: 403 });
  }

  return Response.json({ allowed: true, ...doc.data() });
}