import React, { useState } from "react";
import { Carousel } from "antd";

function ImageSlider(props) {
  return (
    <div>
          <Carousel autoplay>
        {props.images.map((image, index) => (
          <div key={index}>
            <img
                src={`https://justins-online-shop.herokuapp.com/${image}`}
                alt="productImage"
                id="carousel-image"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ImageSlider;
