import "@/styles/globals.css";
import React from "react";
import { Montserrat } from "next/font/google";
import { SessionProvider } from "next-auth/react"
import Header from "@/components/Header";
import { Toaster } from "react-hot-toast"

const inter = Montserrat({ subsets: ["latin"], weight: "400" });

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <main
      className={`mx-auto max-w-screen-7xl px-4 sm:px-6 lg:px-8 ${inter.className}`}
    >
      <SessionProvider session={session}>
        <Header />
        <Component {...pageProps} />
        <Toaster 
          position="top-center"
          reverseOrder={false}
        />
      </SessionProvider>
    </main>
  );
}
