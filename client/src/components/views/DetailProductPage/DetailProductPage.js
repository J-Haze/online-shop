import React, { useEffect, useState, useContext, createContext } from "react";
import Axios from "axios";
import { Row, Col } from "antd";
import ProductImage from "./Sections/ProductImage";
import ProductInfo from "./Sections/ProductInfo";
import { addToCart } from "../../../_actions/user_actions";
import { addProductSize } from "../../../_actions/user_actions";
import { useDispatch } from "react-redux";

export const Context = createContext({});

// import { REDUX_SIZE } from "../../../../../client/src/_actions/types.js";
// import { reduxSize } from "../../../_actions/user_actions";

// import posts from "./size_reducer"

function DetailProductPage(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.productId;
  const [Product, setProduct] = useState([]);
  const [sizeValue, setSizeValue] = useState(1);

  // const sizes = [
  //   { key: 1, value: "S" },
  //   { key: 2, value: "M" },
  //   { key: 3, value: "L" },
  //   { key: 4, value: "XL" },
  // ];

  useEffect(() => {
    Axios.get(`/api/product/products_by_id?id=${productId}&type=single`).then(
      (response) => {
        setProduct(response.data[0]);
      }
    );
  }, []);

  // const sizeContext = useContext(sizeValue);
  // const sizeShared = sizeContext(sizeContext)

  const addToCartHandler = (productId) => {
    dispatch(addToCart(productId, sizeValue));
    
    // dispatch(sizeValue)
    console.log(sizeValue);
  };

  // function reduxSize(size) {
  //   return {
  //     type: 'REDUX_SIZE',
  //     size
  //   }
  // }

  const onSizeChange = (event) => {
    setSizeValue(event.currentTarget.value);
    // dispatch(addProductSize(productId, event.currentTarget.value));
    // reduxSize.bind(null, event.currentTarget.value);
    // dispatch(reduxSize(event.currentTarget.value));
    console.log('test')
    console.log(event.currentTarget.value);
  };

  // const addProductSize = (size) => {
  //   return {
  //     type: `ADD_SIZE`,
  //     payload: 'large',
  //     // size
  //   }
  // }

  return (
    <div className="postPage post-page">
      <div className="product-detail-cont">
        <h1>{Product.title}</h1>
      </div>

      <br />

      <Row gutter={[16, 16]}>
        <Col lg={12} xs={24}>
          <ProductImage detail={Product} />
        </Col>
        <Col lg={12} xs={24}>
          <ProductInfo
            addToCart={addToCartHandler}
            detail={Product}
            onSizeChange={onSizeChange}
            sizeValue={sizeValue}
            // sizes={sizes}
          />
        </Col>
      </Row>
    </div>
  );
}

export default DetailProductPage;
