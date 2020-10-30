import React, { useState } from "react";

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
  const [smallValue, setSmallValue] = useState(0);
  const [mediumValue, setMediumValue] = useState(0);
  const [largeValue, setLargeValue] = useState(0);
  const [XLValue, setXLValue] = useState(0);

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
    //This reverts the value of checked key
    setMensChecked(!mensChecked);
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

  return (
    <div id="upload-cont">
      <div id="upload-inner-cont">
        <h2> Upload Travel Product</h2>
      </div>
      UploadProductPage
      <form onSubmit>
        {/*DropZone */}

        <br />
        <br />
        <label>Title</label>
        <input onChange={onTitleChange} value={titleValue} />
        <br />
        <br />
        <label>Description</label>
        <textarea onChange={onDescriptionChange} value={descriptionValue} />
        <br />
        <br />
        <label>Price($)</label>
        <input onChange={onPriceChange} value={priceValue} type="number" />
        <br />
        <br />

        <input
          type="radio"
          id="male"
          name="gender"
          value="male"
          onChange={() => onCheck()}
          checked={mensChecked}
        />
        <label for="male">Male</label>

        <br />
        <input
          type="radio"
          id="female"
          name="gender"
          value="female"
          onChange={() => onCheck()}
          checked={!mensChecked}
        />
        <label for="female">Female</label>
        <br />

        <br />
        <br />

        <select>
          {categories.map((item) => (
              <option key={item.key} value={item.key}>{item.value}></option>
          ))}
        </select>
        <br />
        <br />
        <div>Quantity added to Inventory:</div>
        <label>S</label>
        <input onChange={onSmallChange} value={smallValue} type="number" />
        <br />
        <br />
        <label>M</label>
        <input onChange={onMediumChange} value={mediumValue} type="number" />
        <br />
        <br />
        <label>L</label>
        <input onChange={onLargeChange} value={largeValue} type="number" />
        <br />
        <br />
        <label>XL</label>
        <input onChange={onXLChange} value={XLValue} type="number" />
        <br />
        <br />
        <button onClick>Submit</button>
      </form>
    </div>
  );
}

export default UploadProductPage;
