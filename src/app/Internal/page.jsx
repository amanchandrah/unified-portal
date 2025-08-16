// src/app/Internal/page.jsx
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { headers } from "next/headers";          // NEW
import AccessDenied from "../components/AccessDenied";
import InternalPage from "./InternalPage";

export default async function InternalRoute() {
  // 1. make sure the user is logged in
  const session = await getServerSession(authOptions);
  if (!session) return <AccessDenied />;

  // 2. ask the API again, but send the cookies so it knows the user
  const cookieHeader = (await headers()).get("cookie") ?? "";
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/checkOrganiser`,
    {
      headers: { cookie: cookieHeader },
      cache: "no-store",            // always fresh
    }
  );

  const data = await res.json();

  // 3. finally decide
  if (!data.allowed) return <AccessDenied />;

  return <InternalPage />;
}