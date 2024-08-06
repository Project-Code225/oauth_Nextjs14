// components/Navbar.js
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav>
      <ul>
        <li>
          <Link href="/" legacyBehavior>
            <a>Home</a>
          </Link>
        </li>
        {session ? (
          <>
            <li>
              <Link href="/profile" legacyBehavior>
                <a>Profile</a>
              </Link>
            </li>
            <li>
              <button onClick={() => signOut()}>Sign out</button>
            </li>
          </>
        ) : (
          <li>
            <button onClick={() => signIn("google")}>Sign in with Google</button>
          </li>
        )}
      </ul>
      <style jsx>{`
        nav {
          background: #333;
          color: #fff;
          padding: 1rem;
        }
        ul {
          display: flex;
          list-style: none;
        }
        li {
          margin-right: 1rem;
        }
        a {
          color: #fff;
          text-decoration: none;
        }
        button {
          background: none;
          border: none;
          color: #fff;
          cursor: pointer;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
