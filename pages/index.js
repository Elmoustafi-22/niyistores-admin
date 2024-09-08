import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGoogle} from "@fortawesome/free-brands-svg-icons";
import { signIn, signOut, useSession } from "next-auth/react";



export default function Home() {
  const { data: session } = useSession()
  if(session) {
    return <>
      Signed in as {session.user.email} <br />
      <button onClick={() => signOut()}>Sign out</button>
    </>
  }

  return (
    <>
      <div className="flex flex-col min-h-screen justify-center items-center">
        <h1 className="text-3xl font-bold max-w-lg text-center">
          Welcome to the admin page of <em>NIYISTORES🛒</em>
        </h1>
        <p className="font-medium my-4">An account is needed to view</p>
        <button
          className="inline-block rounded border border-teal-600 bg-teal-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-teal-600 focus:outline-none focus:ring active:text-teal-500 transition ease-in duration-300"
          onClick={() => signIn()}
        >
          Sign in with
          <FontAwesomeIcon icon={faGoogle} className="ml-2" />
          oogle
        </button>
      </div>
    </>
  );
}
