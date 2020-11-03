import React from 'react'
import { Button, Descriptions } from 'antd';

function ProductInfo() {
    return (
      <div>
        <Descriptions title="Product Info">
          <Descriptions.Item label="Price"></Descriptions.Item>
          <Descriptions.Item label="Sold"></Descriptions.Item>
          <Descriptions.Item label="View"></Descriptions.Item>

          {/* <Descriptions.Item label="Price"> {Product.price}</Descriptions.Item>
          <Descriptions.Item label="Sold">{Product.sold}</Descriptions.Item>
          <Descriptions.Item label="View"> {Product.views}</Descriptions.Item> */}
          <Descriptions.Item label="Description">
            {/* {Product.description} */}
          </Descriptions.Item>
        </Descriptions>

        <br />
        <br />
        <br />
        <div className="product-info-btn-cont">
          <Button size="large" shape="round" type="danger" onClick>
            Add to Cart
          </Button>
        </div>
      </div>
    );
}

export default ProductInfo
