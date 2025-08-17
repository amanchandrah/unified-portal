import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";
import { db } from "@/firebase/config";
import { doc, getDoc } from "firebase/firestore";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email)
    return Response.json({ allowed: false }, { status: 401 });

  const snap = await getDoc(doc(db, "organisers", session.user.email));
  if (!snap.exists())
    return Response.json({ allowed: false }, { status: 403 });

  const data = snap.data();
  return Response.json({
    allowed: true,
    name: data?.Name || "—",
    email: snap.id,
    department: data?.Department || "—",
    position: data?.Position || "—",
  });
}