import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { Icon } from "antd";
import Axios from "axios";

function FileUpload(props) {
  const [images, setImages] = useState([]);

  const onDrop = (files) => {
    let formData = new FormData();
    const config = {
      header: { "content-type": "multipart/form-data" },
    };
    formData.append("file", files[0]);

    Axios.post("/api/product/uploadImage", formData, config).then(
      (response) => {
        if (response.data.success) {
          setImages([...images, response.data.image]);
          props.refreshFunction([...images, response.data.image]);
        } else {
          alert("Failed to save image to server.")
        }
      })
  };

  return (
    <div id="upload-component">
      <Dropzone onDrop={onDrop} multiple={false} maxSize={800000000}>
        {({ getRootProps, getInputProps }) => (
          <div id="dropzone-inner" {...getRootProps()}>
            {console.log("getRootProps", { ...getRootProps() })}
            {console.log("getInputProps", { ...getInputProps() })}

            <input {...getInputProps()} />

            <Icon type="plus" id="dropzone-icon" />
          </div>
        )}
      </Dropzone>

          

          <div id="upload-scroll">
              {images.map((image, index) => (
                  <div onClick={() => ondeviceorientationabsolute(image)}>
                      <img id="scroll-img" src={`http://localhost:5000/${image}`} alt={`productImg-${index}`}/>
                      </div>
              ))}
      </div>
    </div>
  );
}

export default FileUpload;
