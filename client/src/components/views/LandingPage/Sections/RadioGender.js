import React, { useState } from "react";
import { Collapse, Radio } from "antd";

const { Panel } = Collapse;

function RadioGender(props) {
  const [Value, setValue] = useState("0");

  const renderRadioGender = () =>
    props.list &&
    props.list.map((value) => (
      <Radio key={value._id} value={`${value._id}`}>
        {value.name}
      </Radio>
    ));

  const handleChange = (event) => {
    setValue(event.target.value);
    props.handleFilters(event.target.value);
  };

  return (
    <div>
      <Collapse defaultActiveKey={["0"]}>
        <Panel header="Men's & Women's" key="1">
          <Radio.Group onChange={handleChange} value={Value}>
            {renderRadioGender()}
          </Radio.Group>
        </Panel>
      </Collapse>
    </div>
  );
}

export default RadioGender;
