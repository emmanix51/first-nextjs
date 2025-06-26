"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { auth } from "@/app/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedIn = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => loggedIn();
  });

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
      })
      .catch((error) => {
        console.error("Sign-out error:", error);
      });
  };
  return (
    <div className="p-2 flex justify-between bg-slate-900">
      <div>
        <Link className="text-lg  text-white" href=".">
          Emman Blog
        </Link>
      </div>
      <div className="space-x-2">
        <Link className="text-white" href="/about">
          About
        </Link>
        <Link className="text-white" href="/contact-us">
          Contact Us
        </Link>
        {user ? (
          <button
            onClick={handleSignOut}
            className="text-white bg-red-600 px-3 py-1 rounded hover:bg-red-500 transition"
          >
            Sign Out
          </button>
        ) : (
          <Link className="text-white" href="/signup">
            Sign Up
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
