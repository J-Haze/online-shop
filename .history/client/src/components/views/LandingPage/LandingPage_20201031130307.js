import React, { useState, useEffect } from "react";
import { FaCode } from "react-icons/fa";
import Axios from "axios";
import { Icon, Col, Card, Row } from "antd";
import ImageSlider from "../../utils/ImageSlider";

const { Meta } = Card;

function LandingPage() {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    Axios.post("/api/product/getProducts").then((response) => {
      if (response.data.success) {
        setProducts(response.data.products);
        // console.log(response.data.products);
      } else {
        alert("Failed to fetch product data");
      }
    });
  });
    
    const onLoadMore = () => {
        
    }

  const renderCards = Products.map((product, index) => {
    return (
      <Col className="col" lg={6} md={8} xs={12} key={index}>
        <Card
          className="product-card"
          hoverable={true}
          cover={
            <a href={`/product/${product._id}`}>
              <ImageSlider images={product.images} />
            </a>
          }
        >
          <Meta title={product.title} description={`$${product.price}`} />
        </Card>
      </Col>
    );
  });

  return (
    <div id="landing-cont">
      <div id="landing-inner">
        <h2>
          ACME Clothing Co.
          {/* <Icon type="rocket" />{" "} */}
        </h2>
      </div>
      {Products.length === 0 ? (
        <div id="products-list">
          <h2>No posts yet...</h2>
        </div>
      ) : (
        <div>
          <Row gutter={[16, 16]}>{renderCards}</Row>
        </div>
      )}

      <br />
      <br />

      <div id="load-button-cont">
        <button onClick={onLoadMore}>Load More</button>
      </div>
    </div>
  );
}

export default LandingPage;
