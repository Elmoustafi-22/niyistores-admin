import React, {useState, useEffect} from "react";
import Link from "next/link";

function Products() {
    return (
      <>
        <header className="bg-white">
          <div className="mx-auto max-w-screen-2xl px-4 py-6 sm:px-6 sm:py-12 lg:px-8">
            <div className="sm:flex sm:items-center sm:justify-between">
              <div className="text-center sm:text-left">
                <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                  <span className="text-teal-700 font-bold">All Products</span>
                </h1>

                <p className="mt-1.5 text-md text-gray-500">
                  <em>Let&apos;s create a new product!🎉</em>
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Link
                  className="inline-flex items-center justify-center hover:border hover:border-teal-600 gap-1.5 rounded border border-gray-200 bg-white px-5 py-3 text-gray-900 transition ease-in duration-300 hover:text-teal-700 hover:shadow-md focus:outline-none focus:ring"
                  href={"/products/new"}
                >
                  <span className="text-sm font-medium"> Create Products </span>

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
                      d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </header>

        <hr class="my-0 h-px border-0 bg-gray-300" />

        <div className="mx-auto max-w-screen-2xl px-4 py-6 sm:px-6 sm:py-12 lg:px-8">
            no products
        </div>
      </>
    );
}

export default Products;