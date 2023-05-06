import React, { useState } from "react";
import "./Container.css";
import Filter from "./Filter/Filter";
import Card from "./Card/Card";
import ModelData from "Data/data.json";
import { useSelector } from "react-redux";
import Sort from "./Sort/Sort";

const Container = () => {
  const [data, setData] = useState(Object.entries(ModelData)[0][1]);
  const searchQuery = useSelector((state: any) => state.search);
  const [sortOption, setSortOption] = useState("a-z");

  const filteredData = data?.filter((item: any) =>
    item?.name.toLowerCase().includes(searchQuery)
  );

  const sortItems = (sortOption: any) => {
    return filteredData?.sort((a: any, b: any) => {
      if (sortOption === "a-z") {
        return a.name.localeCompare(b.name);
      } else if (sortOption === "z-a") {
        return b.name.localeCompare(a.name);
      } else if (sortOption === "price: high-to-low") {
        return b.price - a.price;
      } else if (sortOption === "price: low-to-high") {
        return a.price - b.price;
      }
    });
  };

  const sortedItems = sortItems(sortOption);

  return (
    <div className="container_wrapper">
      <div className="container_header">
        <h1>Top Rated Sales</h1>
        <div className="sort">
          <Sort sortOption={sortOption} setSortOption={setSortOption} />
        </div>
      </div>
      <div className="container">
        <div className="container_left">
          <Filter data={data} setData={setData} />
        </div>
        <div className="container_right">
          <Card filteredData={filteredData} />
        </div>
      </div>
    </div>
  );
};

export default Container;
