import React from "react";
import "./Container.css";
import Filter from "./Filter/Filter";
import Card from "./Card/Card";

const Container = () => {
  return (
    <div className="container_wrapper">
      <div className="container_header">
        <h1>Top Rated Sales</h1>
        <div className="sort">Sort</div>
      </div>
      <div className="container">
        <div className="container_left">
          <Filter />
        </div>
        <div className="container_right">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Container;
