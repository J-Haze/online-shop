import React, {useState} from "react";
import { Carousel } from "antd";

function ImageSlider(props) {
    const [autoplayState, setAutoplayState] = useState("");
  return (
    <div>
          <Carousel attribute={autoplayState} onMouseOver={() => console.log("hover") }>
        {props.images.map((image, index) => (
          <div key={index}>
            <img
              src={`http://localhost:5000/${image}`}
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
