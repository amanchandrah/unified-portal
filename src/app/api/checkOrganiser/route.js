// src/app/api/checkOrganiser/route.js
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";
import { getFirestore } from "firebase-admin/firestore";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new Response(JSON.stringify({ allowed: false }), { status: 401 });
  }

  const db  = getFirestore();
  const doc = await db.collection("organisers").doc(session.user.email).get();

  const payload = {
    allowed: doc.exists,
    name:  doc.data()?.Name ?? "—",
    email: doc.id,
    department: doc.data()?.Department ?? "—",
    position: doc.data()?.Position ?? "—",
  };

  console.log("🔍  Real-time check:", session.user.email, payload);

  return Response.json(payload, {
    status: 200,
    headers: { "Cache-Control": "no-store" },
  });
}