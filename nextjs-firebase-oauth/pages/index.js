import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div>
      <h1>Next.js Firebase OAuth</h1>
      {!session ? (
        <>
          <button onClick={() => signIn("google")}>Sign in with Google</button>
        </>
      ) : (
        <>
          <p>Welcome, {session.user.name}</p>
          <button onClick={() => signOut()}>Sign out</button>
          <Link href="/profile" legacyBehavior>
            <a>Go to Profile</a>
          </Link>
        </>
      )}
    </div>
  );
}
