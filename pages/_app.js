import "@/styles/globals.css";
import React from "react";
import { Montserrat } from "next/font/google";
import { SessionProvider } from "next-auth/react"

const inter = Montserrat({ subsets: ["cyrillic"], weight: "400" });

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <main className={`${inter.className}`}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </main>
  );
}
