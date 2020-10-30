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

function UploadProductPage() {
  const [titleValue, setTitleValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [mensChecked, setMensChecked] = useState(true);
  const [categoryValue, setCategoryValue] = useState(1);
  const [smallValue, setSmallValue] = useState(0);
  const [mediumValue, setMediumValue] = useState(0);
  const [largeValue, setLargeValue] = useState(0);
  const [XLValue, setXLValue] = useState(0);

  const [images, setImages] = useState([]);

  const onTitleChange = (event) => {
    setTitleValue(event.currentTarget.value);
  };

  const onDescriptionChange = (event) => {
    setDescriptionValue(event.currentTarget.value);
  };

  const onPriceChange = (event) => {
    setPriceValue(event.currentTarget.value);
  };

  const onCheck = () => {
    setMensChecked(!mensChecked);
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
    setImages(newImages);
  };

  return (
    <div id="upload-cont">
      <div id="upload-inner-cont">
        <Title level={2}> Upload New Product</Title>
      </div>

      <Form onSubmit>
        {/*DropZone */}

        <FileUpload refreshFunction={updateImages} />

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
          id="mens"
          name="gender"
          value="mens"
          onChange={() => onCheck()}
          checked={mensChecked}
        />
        <label for="mens">Men's</label>

        <br />
        <Input
          type="radio"
          id="womens"
          name="gender"
          value="womens"
          onChange={() => onCheck()}
          checked={!mensChecked}
        />
        <label for="womens">Women's</label>
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
        <Button onClick>Submit</Button>
      </Form>
    </div>
  );
}

export default UploadProductPage;
