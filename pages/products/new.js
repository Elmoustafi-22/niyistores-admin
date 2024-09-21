import Product from "@/components/Product";

function NewProduct() {
    return (
      <>
        <div className="sm:flex sm:items-center sm:justify-between py-3">
          <div className="text-center sm:text-left">
            <p className="mt-1.5 text-lg text-gray-500">
              <em>Let&apos;s create a new product!🎉</em>
            </p>
          </div>
        </div>
        <hr className="my-0 h-px border-0 bg-gray-300" />

        <div className="my-10">
            <Product />
        </div>
      </>
    );
}

export default NewProduct;