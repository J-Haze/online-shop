import React, { useState } from "react";

const Category = [
  { key: 1, value: "Shirt" },
  { key: 2, value: "Shorts" },
  { key: 3, value: "Pants" },
];

function UploadProductPage() {
  const [titleValue, setTitleValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [mensChecked, setMensChecked] = useState(true);
//   const [womensChecked, setWomensChecked] = useState(false);

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
          <option key value></option>
        </select>
        <br />
        <br />
        <button onClick>Submit</button>
      </form>
    </div>
  );
}

export default UploadProductPage;
