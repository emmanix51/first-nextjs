"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[user,setUser] =useState(null)


  const signUp=()=>{
    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
        setUser(userCredential.user)
        console.log("user signed up: ", userCredential.user);
    }).catch((error)=>{
        console.log("error signing up: ",error);
    })
  }

  return (
    <div className="items-center justify-items-center min-h-screen">
      <div className="py-8 space-y-2 text-center h-full w-1/2">
        <h1 className="text-slate-900 text-3xl ">Signup</h1>
        <div className="p-4 mx-auto max-w-xl bg-white">
          <form className="mt-8 space-y-5">
            <div>
              <label className="text-sm text-slate-900 font-medium mb-2 block">
                Email
              </label>
              <input
                type="text"
                placeholder="Enter Email"
                className="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm outline-0 transition-all"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm text-slate-900 font-medium mb-2 block">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm outline-0 transition-all"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="button"
              className="text-white bg-slate-900 font-medium hover:bg-slate-800 tracking-wide text-sm px-4 py-2.5 w-full border-0 outline-0 cursor-pointer"
              onClick={signUp}
            >
              Sign up
            </button>
          </form>
        </div>
      </div>

      <Link href={"../"}>
        <Button>Return to home</Button>
      </Link>
    </div>
  );
}
