import React, {useState, useEffect} from "react";
import Link from "next/link";
import axios from "axios";

const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const pageSize = 10;

function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
      axios.get("/api/products").then(res => {
        setProducts(res.data)
        setLoading(false)
      })
    }, []);

    const totalPages = Math.ceil(products.length / pageSize);

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(currentPage * pageSize, products.length);

    const productsToDisplay = products.slice(startIndex, endIndex);

    const changePage = (page) => {
      setCurrentPage(page);
      setLoading(false)
    }

    return (
      <div className=" md:overflow-x-scroll max-sm:overflow-x-scroll">
        <header className="bg-white">
          <div className="mx-auto max-md:flex-col px-4 py-6 sm:px-6 sm:py-12 lg:px-8">
            <div
              className="flex flex-col gap-6 items-center justify-center
             md:flex-row md:justify-between"
            >
              <div className=" text-center sm:text-left">
                <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                  <span className="text-teal-700 font-bold">All Products</span>
                </h1>

                <p className="mt-1.5 text-md text-gray-500">
                  <em>Let&apos;s create a new product!🎉</em>
                </p>
              </div>

              <div className="flex items-center gap-4 sm:mt-0 sm:flex-row sm:items-center max-w-md">
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
                    className="size-6"
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

        <hr className="my-0 h-px border-0 bg-gray-300" />

        <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 sm:py-12 lg:px-8">
          {loading ? (
            <p>Loading...</p>
          ) : products.length === 0 ? (
            <p>No products</p>
          ) : (
            <div>
              <table className="min-w-full divide-y-2 divide-gray-200 border-collapse bg-white text-left text-sm text-gray-500">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-4 font-medium text-gray-900"
                    ></th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-medium text-gray-900"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-medium text-gray-900"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-medium text-gray-900"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-medium text-gray-900"
                    ></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                  {productsToDisplay.map((product, index) => (
                    <tr key={product._id}>
                      <th className="px-6 py-4 font-medium text-gray-900">
                        {index + 1}
                      </th>
                      <td className="px-6 py-4">{product.title}</td>
                      <td className="px-6 py-4 truncate max-w-sm">
                        {product.description}
                      </td>
                      <td className="px-6 py-4">
                        {formatPrice(product.price)}
                      </td>
                      <td className="flex justify-end gap-4 px-6 py-4 font-medium">
                        <Link
                          href={`/products/delete/${product._id}`}
                          className="text-gray-100  hover:text-red-500 p-2 border border-1 border-orange-600 bg-orange-500 rounded-md hover:bg-white transition ease-in duration-300"
                        >
                          Delete
                        </Link>
                        <Link
                          href={"/products/edit/" + product._id}
                          className=" text-gray-100 hover:text-teal-500 p-2 border border-1 bg-teal-600 rounded-md border-teal-500 hover:bg-white transition ease-in duration-300"
                        >
                          Edit
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {totalPages > 1 && (
                <div className="flex justify-center mt-4">
                  {Array.from({ length: totalPages }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => changePage(i + 1)}
                      className={`mx-2 px-3 py-2 rounded ${
                        i + 1 === currentPage
                          ? "bg-blue-300 text-slate-900"
                          : "bg-gray-200 hover:bg-gray-300"
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
}

export default Products;