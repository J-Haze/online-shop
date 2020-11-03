import React from "react";
import Axios from "axios";

function DetailProductPage() {



  useEffect(() => {
    Axios.get(`/api/product/products_by_id?id=${productId}&type=single`).then(
      (response) => {
        setProduct(response.data[0]);
      }
    );
  }, []);

    return
    <div>
        
    </div>;
}

export default DetailProductPage;
