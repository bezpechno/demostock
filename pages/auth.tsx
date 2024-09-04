// pages/auth.tsx
import { useEffect, useState } from "react";
import { auth, GoogleAuthProvider, signInWithPopup, signOut } from "@lib/firebaseConfig";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "firebase/auth";
import React from 'react';

export default function Auth() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push("/");
    } catch (error) {
      console.error("Error signing in with Google", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md text-center">
        {user ? (
          <>
            <p className="mb-4">Welcome, {user.displayName}!</p>
            <button
              onClick={handleSignOut}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <p className="mb-4">Please sign in with Google</p>
            <button
              onClick={handleGoogleSignIn}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Sign in with Google
            </button>
          </>
        )}
      </div>
    </div>
  );
}
