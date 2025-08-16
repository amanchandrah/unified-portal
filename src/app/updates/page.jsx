import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import AccessDenied from "../components/AccessDenied";
import UpdatesPage from "./UpdatesPage";

export default async function InternalRoute() {
  // 1. make sure the user is logged in
  const session = await getServerSession(authOptions);
  if (!session) return <AccessDenied />;

  // 2. we already checked in /home, so just show the real page
  return <UpdatesPage />;
}