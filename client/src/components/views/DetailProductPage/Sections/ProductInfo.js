import React, { useState, useEffect } from "react";
import { Button, Descriptions } from "antd";

function ProductInfo(props) {
  const [Product, setProduct] = useState({});
  const [sizeValue, setSizeValue] = useState(1);

  useEffect(() => {
    setProduct(props.detail);
  }, [props.detail]);

  useEffect(() => {
    setSizeValue(props.sizeValue);
  }, [props.sizeValue]);

  const addToCartHandler = () => {
    props.addToCart(props.detail._id);
  };

  const sizes = [
    { key: 1, value: "S" },
    { key: 2, value: "M" },
    { key: 3, value: "L" },
    { key: 4, value: "XL" },
  ];

  return (
    <div>
      <Descriptions title="Product Info">
        <Descriptions.Item label="Price"> {Product.price}</Descriptions.Item>
        <Descriptions.Item label="Sold">{Product.sold}</Descriptions.Item>
        <Descriptions.Item label="View"> {Product.views}</Descriptions.Item>
        <Descriptions.Item label="Description">
          {Product.description}
        </Descriptions.Item>
      </Descriptions>

      <div>
        <div id="select-size" >Select Size:</div>
        <select onChange={props.onSizeChange} value={sizeValue}>
          {sizes.map((item) => (
            <option key={item.key} value={item.key}>
              {item.value}
            </option>
          ))}
        </select>
      </div>

      <br />
      <br />
      <br />
      <div className="product-info-btn-cont">
        <Button
          size="large"
          shape="round"
          type="danger"
          onClick={addToCartHandler}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

export default ProductInfo;
