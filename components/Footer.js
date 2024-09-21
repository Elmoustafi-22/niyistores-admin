import Link from "next/link";

export default function Footer() {
  return <>
    <footer className="bg-gray-50 border-t border-zinc-200">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center sm:justify-between">
                <div className="flex justify-center text-teal-600 sm:justify-start">
                    <span className="sr-only">Home</span>
                    <Link 
                      href="/"
                      className=""
                    >
                      <svg
                        className="h-8 w-8 text-teal-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                      Admin
                    </Link>
                </div>
                <p className="mt-4 text-center text-sm text-gray-900 lg:mt-0 lg:text-right mb-0">
                    Copyright &copy; {new Date().getFullYear()}. All rights reserved
                </p>
            </div>
        </div>
    </footer>
  </>
}