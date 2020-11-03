import React, {useEffect} from "react";
import Axios from "axios";

function DetailProductPage() {



  useEffect(() => {
    // Axios.get(`/api/product/products_by_id?id=${productId}&type=single`).then(
    //   (response) => {
    //     setProduct(response.data[0]);
    //   }
    // );
  }, []);

    return
    <div>
        DetailProductPage
    </div>;
}

export default DetailProductPage;
