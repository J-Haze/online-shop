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
          alert("Failed to save image to server.");
        }
      }
    );
  };

  return (
    <div id="upload-component">
      <Dropzone onDrop={onDrop} multiple maxSize>
        {({ getRootProps, getInputProps }) => (
          <div id="dropzone-inner" {...getRootProps()}>
            <input {...getInputProps()} />
            <Icon type="plus" id="dropzone-icon"></Icon>
          </div>
        )}
      </Dropzone>

      <div id="upload-scroll">
        <div onClick>
          <img />
        </div>
      </div>
    </div>
  );
}

export default FileUpload;
