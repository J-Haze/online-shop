import React, { useState } from "react";
import { CheckBox, Collapse } from 'antd';

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

function Checkbox() {
    return (
        <div>
            <Collapse defaultActiveKey={['0']} >
                <Panel header key="1">
                    {category.map((value, index) => (
                        <React.Fragment key={index}>
                            <CheckBox onChange type="checkbox" checked />
                            <span>{value.name}</span>
                        </React.Fragment>
                    ))}
                </Panel>
      </Collapse>
    </div>;
    )
}

export default Checkbox;
