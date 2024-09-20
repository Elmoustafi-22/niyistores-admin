import React, { useEffect, useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGoogle} from "@fortawesome/free-brands-svg-icons";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";



function Home() {
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const router = useRouter

  useEffect(() => {
    axios.get("/api/products").then(response => {
      setProducts(response.data);
    });
  }, []);

  const handleLogout = async () => {
    await signOut();
    router.replace("/")
  }

  const totalImagesCount = products.reduce((total, product) => total + product.images.length, 0);

  const totalPrice = products.reduce((total, product) => total + product.price, 0);

  const costPrice = totalPrice * 1.20;

  const calculateProfitPercentage = (totalPrice, costPrice) => {
    if (costPrice === 0) return 0; // Avoid division by zero
    return ((totalPrice - costPrice) / costPrice) * 100;
  };

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const profitPercentage = calculateProfitPercentage(totalPrice, costPrice);

  if(session) {
    return (
      <>
        <main className={`min-h-screen p-4`}>
          <header>
            <div className="mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
              <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
                <div className="text-center sm:text-left">
                  <h1 className="text-3xl font-bold text-gray-900 sm:text-3xl">
                    Welcome Back,{" "}
                    <span className="text-teal-700 font-bold">
                      {session.user.name}!
                    </span>
                  </h1>

                  <p className="mt-1.5 text-md text-gray-500 max-w-md">
                    <em>View your business stats, and manage your products.</em>
                  </p>
                </div>

                <div className="mt-4 flex flex-col sm:items-center sm:mt-0 sm:flex-row items-center gap-4">
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
                    href="/"
                    target="_blank"
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
                  <button
                    onClick={handleLogout}
                    className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-red-400 px-5 py-3 text-red-500 transition duration-300 hover:shadow-md hover:bg-red-50 hover:text-red-700 focus:outline-none focus:ring"
                    type="button"
                  >
                    <span className="text-sm font-medium"> Logout </span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </header>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
            <div className="h-32 rounded-lg bg-gray-200 flex items-center justify-center">
              <article className="flex max-md:flex-col items-end justify-between rounded-lg gap-4">
                <div>
                  <p className="text-sm text-gray-500">Profit</p>

                  <p className="text-2xl font-medium text-gray-900">
                    $ {formatPrice(totalPrice)}
                  </p>
                </div>

                <div className="inline-flex gap-2 rounded bg-green-100 p-1 text-green-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>

                  <span className="text-xs font-medium"> {Math.round(Math.abs(profitPercentage))}% </span>
                </div>
              </article>
            </div>
            <div className="h-32 rounded-lg bg-gray-200 flex items-center justify-center">
              <article className="flex max-md:flex-col items-end justify-between rounded-lg gap-4">
                <div>
                  <p className="text-sm text-gray-500">Products</p>

                  <p className="text-2xl font-medium text-gray-900">
                    {products.length}
                  </p>
                </div>
                <div className="inline-flex gap-2 rounded bg-green-100 p-1 text-green-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                    />
                  </svg>

                  <span className="text-xs font-medium">
                    {" "}
                    {products.length}{" "}
                  </span>
                </div>
              </article>
            </div>
            <div className="h-32 rounded-lg bg-gray-200 flex items-center justify-center">
              <article className="flex max-md:flex-col items-end justify-between rounded-lg gap-4">
                <div>
                  <p className="text-sm text-gray-500">Images</p>

                  <p className="text-2xl font-medium text-gray-900">
                    {totalImagesCount}
                  </p>
                </div>
                <div className="inline-flex gap-2 rounded bg-green-100 p-1 text-green-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>

                  <span className="text-xs font-medium">
                    {" "}
                    {totalImagesCount}{" "}
                  </span>
                </div>
              </article>
            </div>
            <div className="h-32 rounded-lg bg-gray-200 flex items-center justify-center">
              <article className="flex max-md:flex-col items-end justify-between rounded-lg gap-4">
                <div>
                  <p className="text-sm text-gray-500">Categories</p>

                  <p className="text-2xl font-medium text-gray-900">
                    {categories.length}
                  </p>
                </div>
                <div className="inline-flex gap-2 rounded bg-green-100 p-1 text-green-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
                    />
                  </svg>

                  <span className="text-xs font-medium">
                    {" "}
                    {categories.length}{" "}
                  </span>
                </div>
              </article>
            </div>
          </div>
        </main>
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

export default Home;