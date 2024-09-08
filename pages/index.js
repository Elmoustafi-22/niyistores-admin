import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGoogle} from "@fortawesome/free-brands-svg-icons";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";



export default function Home() {
  const { data: session } = useSession()
  if(session) {
    return (
      <>
        <header className="bg-white">
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
              <div className="text-center sm:text-left">
                <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                  Welcome Back,{" "}
                  <span className="text-teal-700 font-bold">
                    {session.user.name}!
                  </span>
                </h1>

                <p className="mt-1.5 text-md text-gray-500">
                  <em>View your business stats, and manage your products.</em>
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Link
                  className="inline-flex items-center justify-center hover:border hover:border-teal-600 gap-1.5 rounded border border-gray-200 bg-white px-5 py-3 text-gray-900 transition ease-in duration-300 hover:text-teal-700 hover:shadow-md focus:outline-none focus:ring"
                  href={"/products"}
                >
                  <span className="text-sm font-medium"> View Products </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </Link>

                <Link
                  className="inline-flex items-center justify-center hover:border hover:border-orange-500 gap-1.5 rounded border border-gray-200 bg-white px-5 py-3 text-orange-600 transition ease-in duration-300 hover:text-orange-500 hover:shadow-md focus:outline-none focus:ring"
                  href={"#"}
                >
                  <span className="text-sm font-medium">View shop</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
          <div className="h-32 rounded-lg bg-gray-200"></div>
          <div className="h-32 rounded-lg bg-gray-200"></div>
          <div className="h-32 rounded-lg bg-gray-200"></div>
          <div className="h-32 rounded-lg bg-gray-200"></div>
        </div>
      </>
    );
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
          onClick={() => signIn("google")}
        >
          Sign in with
          <FontAwesomeIcon icon={faGoogle} className="ml-2" />
          oogle
        </button>
      </div>
    </>
  );
}
