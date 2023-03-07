import React, { useState } from "react";
import "./FirstComponent.css";

import { dummyPESdata } from "../../data";

import { Divider, Button } from "antd";

import AntTree from "./Ant-Tree";

const FirstComponent = () => {
  const [selectedSection, setSelectedSection] = useState(null);

  const data = dummyPESdata;

  const handleSectionSelect = (item) => {
    setSelectedSection(item);
  };

  return (
    <div className="main-container">
      <div className="section">
        <h1>Sections</h1>
        <div>
          {data.map((item) => {
            return (
              <div key={item.id}>
                <Button onClick={() => handleSectionSelect(item)}>
                  {item.section}
                </Button>
                <Divider orientation="left"></Divider>
              </div>
            );
          })}
        </div>
      </div>
      <div className="strategies">
        <AntTree section={selectedSection} />
      </div>
    </div>
  );
};

export default FirstComponent;
