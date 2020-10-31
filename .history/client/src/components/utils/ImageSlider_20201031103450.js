import React, { useState } from "react";
import { Carousel } from "antd";

function ImageSlider(props) {
  const [autoplayState, setAutoplayState] = useState(true);
  return (
    <div>
          <Carousel autoplay={autoplayState}>
        {props.images.map((image, index) => (
          <div key={index}>
            <img
                src={`http://localhost:5000/${image}`}
                alt="productImage"
                id="carousel-image"
                // onMouseEnter={setAutoplayState(false)}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ImageSlider;
