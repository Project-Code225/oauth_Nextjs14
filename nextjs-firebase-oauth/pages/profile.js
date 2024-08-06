import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Profile() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div>
        <h1>Access Denied</h1>
        <p>
          <Link href="/" legacyBehavior>
            <a>You must be signed in to view this page</a>
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Welcome, {session.user.name}</p>
      <p>Email: {session.user.email}</p>
    </div>
  );
}
