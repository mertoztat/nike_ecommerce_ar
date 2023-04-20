import React, { useState } from "react";
import "./Container.css";
import Filter from "./Filter/Filter";
import Card from "./Card/Card";
import ModelData from "Data/data.json";

const Container = () => {
  const [data, setData] = useState(Object.entries(ModelData)[0][1]);

  return (
    <div className="container_wrapper">
      <div className="container_header">
        <h1>Top Rated Sales</h1>
        <div className="sort">Sort</div>
      </div>
      <div className="container">
        <div className="container_left">
          <Filter data={data} setData={setData} />
        </div>
        <div className="container_right">
          <Card data={data} />
        </div>
      </div>
    </div>
  );
};

export default Container;
