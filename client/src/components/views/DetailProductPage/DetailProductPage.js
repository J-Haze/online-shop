import React, { useEffect, useState, useContext, createContext } from "react";
import Axios from "axios";
import { Row, Col } from "antd";
import ProductImage from "./Sections/ProductImage";
import ProductInfo from "./Sections/ProductInfo";
import { addToCart } from "../../../_actions/user_actions";
import { useDispatch } from "react-redux";

import SizeContext from "../../SizeContext";

function DetailProductPage(props, sizeValue) {
  const dispatch = useDispatch();
  const productId = props.match.params.productId;
  const [Product, setProduct] = useState([]);

  useEffect(() => {
    Axios.get(`/api/product/products_by_id?id=${productId}&type=single`).then(
      (response) => {
        setProduct(response.data[0]);
      }
    );
  }, []);

  const addToCartHandler = (productId, sizeValue) => {
    dispatch(addToCart(productId, sizeValue));
    console.log("outer", sizeValue);
  };

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
          <SizeContext.Consumer>
            {({ sizeValue, onSizeChange, refresh, setRefresh }) => (
              <ProductInfo
                addToCart={addToCartHandler}
                detail={Product}
                onSizeChange={onSizeChange}
                sizeValue={sizeValue}
                refresh={refresh}
                setRefresh={setRefresh}
              />
            )}
          </SizeContext.Consumer>
        </Col>
      </Row>
    </div>
  );
}

export default DetailProductPage;
