import Product from "@/components/Product";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function EditProduct() {
  const router = useRouter();
  const { id } = router.query;

  const [productInfo, setProductInfo] = useState(null);

  useEffect(() => {
    if (!id) {
      return;
    } else {
      axios.get(`/api/products?id=${id}`).then((response) => {
        setProductInfo(response.data);
      });
    }
  }, [id]);
  return (
    <>
      <div className="sm:flex sm:items-center sm:justify-between py-4">
        <div className="text-center sm:text-left">
          <p className="mt-1.5 text-md text-teal-500">
            Editing {productInfo?.title}
          </p>
        </div>
      </div>
      <hr className="h-px border-0 bg-gray-300" />

      <div className="my-10">{productInfo && <Product {...productInfo} />}</div>
    </>
  );
}
export default EditProduct;