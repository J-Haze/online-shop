import React from "react";
import { Carousel } from "antd";

function ImageSlider(props) {
  return (
    <div>
          <Carousel onHover={() => autoplay = 'true'}
        {props.images.map((image, index) => (
          <div key={index}>
            <img src={`http://localhost:5000/${image}`} alt="productImage" id="carousel-image"/>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ImageSlider;
