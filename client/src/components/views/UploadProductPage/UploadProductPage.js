import React, { useState } from "react";
import { Typography, Button, Form, message, Input, Icon } from "antd";
import FileUpload from "../../utils/FileUpload";
import Axios from "axios";

const { Title } = Typography;
const { TextArea } = Input;

const categories = [
  { key: 1, value: "Shirt" },
  { key: 2, value: "Shorts" },
  { key: 3, value: "Pants" },
];

function UploadProductPage(props) {
  const [titleValue, setTitleValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [genderValue, setGenderValue] = useState(1);
  const [categoryValue, setCategoryValue] = useState(1);
  const [smallValue, setSmallValue] = useState(0);
  const [mediumValue, setMediumValue] = useState(0);
  const [largeValue, setLargeValue] = useState(0);
  const [XLValue, setXLValue] = useState(0);

  const [imagesValue, setImagesValue] = useState([]);

  const onTitleChange = (event) => {
    setTitleValue(event.currentTarget.value);
  };

  const onDescriptionChange = (event) => {
    setDescriptionValue(event.currentTarget.value);
  };

  const onPriceChange = (event) => {
    setPriceValue(event.currentTarget.value);
  };

  const onCheck = (selection) => {
    setGenderValue(selection);
  };

  const onCategoryChange = (event) => {
    setCategoryValue(event.currentTarget.value);
  };

  const onSmallChange = (event) => {
    setSmallValue(event.currentTarget.value);
  };

  const onMediumChange = (event) => {
    setMediumValue(event.currentTarget.value);
  };

  const onLargeChange = (event) => {
    setLargeValue(event.currentTarget.value);
  };

  const onXLChange = (event) => {
    setXLValue(event.currentTarget.value);
  };

  const updateImages = (newImages) => {
    setImagesValue(newImages);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const variables = {
      writer: props.user.userData._id,
      title: titleValue,
      description: descriptionValue,
      price: priceValue,
      images: imagesValue,
      gender: genderValue,
      category: categoryValue,
      quantitySmall: smallValue,
      quantityMedium: mediumValue,
      quantityLarge: largeValue,
      quantityXL: XLValue,
    };

    Axios.post("/api/product/uploadProduct", variables).then((response) => {
      if (response.data.success) {
        alert("Product successfully uploaded");
        props.history.push("/");
      } else {
        alert("Failed to upload Product");
      }
    });
  };

  return (
    <div id="upload-cont">
      <div id="upload-inner-cont">
        <Title level={2}> Upload New Product</Title>
      </div>

      <Form onSubmit={onSubmit}>
        {/*DropZone */}
        <div id="add-images">Add Image(s):</div>
        <FileUpload refresh={updateImages} />

        <br />
        <br />
        <label>Title</label>
        <Input onChange={onTitleChange} value={titleValue} />
        <br />
        <br />
        <label>Description</label>
        <TextArea onChange={onDescriptionChange} value={descriptionValue} />
        <br />
        <br />
        <label>Price($)</label>
        <Input onChange={onPriceChange} value={priceValue} type="number" />
        <br />
        <br />

        <Input
          type="radio"
          id="men"
          name="gender"
          value={1}
          onChange={() => onCheck(1)}
          checked={genderValue == 1}
        />
        <label for="men">Men's</label>

        <br />
        <Input
          type="radio"
          id="women"
          name="gender"
          value={2}
          onChange={() => onCheck(2)}
          checked={genderValue == 2}
        />
        <label for="women">Women's</label>
        <br />

        <br />
        <br />
        <div>Type of Clothing:</div>
        <select onChange={onCategoryChange} value={categoryValue}>
          {categories.map((item) => (
            <option key={item.key} value={item.key}>
              {item.value}
            </option>
          ))}
        </select>
        <br />
        <br />
        <div>Quantity added to Inventory:</div>
        <label>S</label>
        <Input onChange={onSmallChange} value={smallValue} type="number" />
        <br />
        <br />
        <label>M</label>
        <Input onChange={onMediumChange} value={mediumValue} type="number" />
        <br />
        <br />
        <label>L</label>
        <Input onChange={onLargeChange} value={largeValue} type="number" />
        <br />
        <br />
        <label>XL</label>
        <Input onChange={onXLChange} value={XLValue} type="number" />
        <br />
        <br />
        <Button onClick={onSubmit}>Submit</Button>
      </Form>
    </div>
  );
}

export default UploadProductPage;
