import Link from "next/link";
import React from "react";

function Product() {
    return (
      <>
        <div className="mx-auto max-w-2xl">
          <div className="mx-auto my-4">
            <div>
              <label
                htmlFor="title"
                className="block text-lg font-medium text-gray-700 py-2"
              >
                Title
              </label>

              <input
                type="text"
                id="title"
                placeholder="Title of the product"
                className="block w-full rounded-md border-gray-300 shadow-sm sm:text-sm focus:border-primary-400
                focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed
              disabled:bg-gray-50 disabled:text-gray-500 border p-3"
              />
            </div>
          </div>

          <div className="mx-auto my-4">
            <div>
              <label
                htmlFor="title"
                className="block text-lg font-medium text-gray-700 py-2"
              >
                Select Category
              </label>

              <select
                id="category"
                className="block w-full rounded-md border-gray-300 shadow-sm sm:text-sm focus:border-primary-400
                focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed
              disabled:bg-gray-50 disabled:text-gray-500 border p-3"
              >
                <option value="">No category selected</option>
                <option value="">Option02</option>
                <option value="">Option03</option>
              </select>
            </div>
          </div>

          <div className="mx-auto my-4">
            <div className="mx-auto">
              <label
                htmlFor="title"
                className="block text-lg font-medium text-gray-700 py-2"
              >
                Images
              </label>
              <label className="flex w-full cursor-pointer appearance-none items-center justify-center rounded-md border-2 border-dashed border-purple-300 p-6 transition-all hover:border-primary-300">
                <div className="space-y-1 text-center">
                  <div className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-6 w-6 text-gray-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                      />
                    </svg>
                  </div>
                  <div className="text-gray-600">
                    <Link
                      href="#"
                      className="font-medium text-primary-500 hover:text-primary-700"
                    >
                      Click to upload
                    </Link>{" "}
                    or drag and drop
                  </div>
                  <p className="text-sm text-gray-500">
                    SVG, PNG, JPG OR GIF (max 800x400px)
                  </p>
                </div>
                <input id="images" type="file" className="sr-only" />
              </label>
            </div>
          </div>

          <div className="mx-auto my-4">
            <div>
              <label
                htmlFor="description"
                className="block text-lg font-medium text-gray-700 py-2"
              >
                Description
              </label>

              <textarea
                type="text"
                id="description"
                placeholder="Description of the product"
                rows={5}
                required
                className="block w-full rounded-md border-gray-300 shadow-sm sm:text-sm focus:border-primary-400
                focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed
              disabled:bg-gray-50 disabled:text-gray-500 border p-3"
              ></textarea>
            </div>
          </div>

          <div className="mx-auto my-4">
            <div>
              <label
                htmlFor="price"
                className="block text-lg font-medium text-gray-700 py-2"
              >
                Price
              </label>

              <input
                type="number"
                id="price"
                placeholder="Price"
                className="block w-full rounded-md border-gray-300 shadow-sm sm:text-sm focus:border-primary-400
                focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed
              disabled:bg-gray-50 disabled:text-gray-500 border p-3"
              />
            </div>
          </div>

          <div className="mx-auto my-4">
            <button
              className="w-full inline-block rounded border transition ease-in duration-300 border-green-600 bg-green-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-green-600 focus:outline-none focus:ring active:text-green-500"
              type="submit"
            >
              Save Product
            </button>
          </div>
        </div>
      </>
    );
}

export default Product;