import axios from "axios";
import Link from "next/link";
import React, {useState, useEffect} from "react";
import { useRouter } from "next/router";
import Spinner from "./Spinner";
import { ReactSortable } from "react-sortablejs";

function Product() {
    const [redirect, setRedirect] = useState(false);
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [images, setImages] = useState([]);
    const [isUploading, setIsUploading] = useState(false)

    const uploadImagesQueue = []

    async function createProduct(e){
      e.preventDefault();

      if (isUploading) {
        await Promise.all(uploadImagesQueue)
      }
      
      const data = {title, description, price};
      await axios.post("/api/products", data)

      setRedirect(true)
    }

    if (redirect) {
      router.push("/products");
      return null;
    }

    async function uploadImages(e) {
      const files = e.target?.files;
      if(files?.length > 0) {
        setIsUploading(true)
        for (const file of files){
          const data = new FormData();
          data.append("file", file)

          uploadImagesQueue.push(
             axios.post("/api/upload", data).then(res => {
              setImages(oldImages => [...oldImages, ...res.data.links])
             })
          )
        }

        await Promise.all(uploadImagesQueue);
        setIsUploading(false)
      } else {
        return ("An error occured")
      }
    }

    function updateImagesOrder(image){
      setImages(image)
      console.log(image)
    }

    function handleDeleteImage(index) {
      const updateImages = [...images];
      updateImages.splice(index, 1);
      setImages(updateImages)
    }
      
    return (
      <>
        <form onSubmit={createProduct} className="mx-auto max-w-2xl">
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
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
                for="example1"
                className="mb-1 block text-lg font-medium text-gray-700 py-2"
              >
                Images
              </label>
              <label className="flex w-full cursor-pointer appearance-none items-center justify-center rounded-md border-2 border-dashed border-purple-400 p-6 transition-all hover:border-primary-300">
                <div className="space-y-1 text-center">
                  <div className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-6 w-6 text-gray-500"
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
                    SVG, PNG, JPG or GIF (max. 800x400px)
                  </p>
                </div>
                <input
                  id="fileInput"
                  type="file"
                  className="hidden"
                  accept="images/*"
                  multiple
                  onChange={uploadImages}
                />
              </label>
            </div>
          </div>
          <div className="grid grid-cols-2 items-center rounded">
            {isUploading && (
              <Spinner className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            )}
          </div>
          {!isUploading && (
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mb-2">
              <ReactSortable
                list={Array.isArray(images) ? images : []}
                animation={200}
                setList={updateImagesOrder}
                className="w-[350px] h-auto gap-2 flex justify-between align-items-center"
              >
                {Array.isArray(images) &&
                  images.map((link, index) => (
                    <div key={link} className="relative group">
                      <img
                        src={link}
                        alt="image"
                        className="object-cover h-32 w-44 rounded-md border p-2 cursor-pointer transition-transform transform-gpu group-hover:scale-105"
                      />

                      <div className="absolute top-2 right-2 cursor-pointer group-hover:opacity-100 opacity-0 transition-opacity">
                        <button onClick={() => handleDeleteImage(index)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6 text-orange-600 rounded-full"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
              </ReactSortable>
            </div>
          )}

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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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
                value={price}
                onChange={(e) => setPrice(e.target.value)}
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
        </form>
      </>
    );
}

export default Product;