import React, { useState } from "react";
import { Checkbox, Collapse } from "antd";

const { Panel } = Collapse;

const category = [
  {
    _id: 1,
    name: "Shirts",
  },
  {
    _id: 2,
    name: "Shorts",
  },
  {
    _id: 3,
    name: "Pants",
  },
];

const handleToggle = (value) => {
    const currentIndex = Checked.indexOf(value);
    const newChecked = [...Checked];

    if (currentIndex === -1) {
    newChecked.push(value);
    } else {
    newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    props.handleFilters(newChecked);
    //update this checked information into Parent Component
};

const renderCheckboxLists = () =>
  category.map((value, index) => (
    <React.Fragment key={index}>
      <Checkbox onChange type="checkbox" checked />
      <span>{value.name}</span>
    </React.Fragment>
  ));

function CheckBox() {
  return (
    <div>
      <Collapse defaultActiveKey={["0"]}>
        <Panel header key="1">
          {renderCheckboxLists()}
        </Panel>
      </Collapse>
    </div>
  );
}

export default CheckBox;
