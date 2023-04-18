import React, { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import "./Filter.css";

const Filter = () => {
  const [showGender, setShowGender] = useState<boolean>(false);
  const [showColor, setShowColor] = useState<boolean>(false);
  const [showPrice, setShowPrice] = useState<boolean>(false);
  return (
    <div className="filter">
      <div className="dropdownTop" onClick={() => setShowPrice(!showPrice)}>
        Price
        {showPrice ? <FaAngleDown /> : <FaAngleUp />}
      </div>
      {!showPrice && (
        <div className="dropdownWrapper">
          <div className="checkboxItem">
            <label htmlFor="">
              <input
                type="checkbox"
                name="capacity_capacity8"
                // checked={filters.capacity.capacity8 || false}
                // onChange={handleChange}
              />
              100$-200$
            </label>
            <label htmlFor="">
              <input
                type="checkbox"
                name="capacity_capacity16"
                // checked={filters.capacity.capacity16 || false}
                // onChange={handleChange}
              />
              200$-300$
            </label>
            <label htmlFor="">
              <input
                type="checkbox"
                name="capacity_capacity48"
                // checked={filters.capacity.capacity48 || false}
                // onChange={handleChange}
              />
              300$-500$
            </label>
          </div>
        </div>
      )}

      <div className="dropdownTop" onClick={() => setShowGender(!showGender)}>
        Gender
        {showGender ? <FaAngleDown /> : <FaAngleUp />}
      </div>
      {!showGender && (
        <div className="dropdownWrapper">
          <div className="checkboxItem">
            <label htmlFor="">
              <input
                type="checkbox"
                name="capacity_capacity8"
                // checked={filters.capacity.capacity8 || false}
                // onChange={handleChange}
              />
              Man
            </label>
            <label htmlFor="">
              <input
                type="checkbox"
                name="capacity_capacity16"
                // checked={filters.capacity.capacity16 || false}
                // onChange={handleChange}
              />
              Women
            </label>
            <label htmlFor="">
              <input
                type="checkbox"
                name="capacity_capacity48"
                // checked={filters.capacity.capacity48 || false}
                // onChange={handleChange}
              />
              Unisex
            </label>
          </div>
        </div>
      )}

      {/* 2.dropdown */}
      <div className="dropdownTop" onClick={() => setShowColor(!showColor)}>
        Color
        {showColor ? <FaAngleDown /> : <FaAngleUp />}
      </div>
      {!showColor && (
        <div className="dropdownWrapper">
          <div className="checkboxItem">
            <label htmlFor="">
              <input
                type="checkbox"
                name="type_Artistic"
                // checked={filters.type.Artistic || false}
                // onChange={handleChange}
              />
              Orange
            </label>
            <label htmlFor="">
              <input
                type="checkbox"
                name="type_Education"
                // checked={filters.type.Education || false}
                // onChange={handleChange}
              />
              Yellow
            </label>
            <label htmlFor="">
              <input
                type="checkbox"
                name="type_Business"
                // checked={filters.type.Business || false}
                // onChange={handleChange}
              />
              Blue
            </label>
            <label htmlFor="">
              <input
                type="checkbox"
                name="type_Entertainment"
                // checked={filters.type.Entertainment || false}
                // onChange={handleChange}
              />
              White
            </label>
            <label htmlFor="">
              <input
                type="checkbox"
                name="type_Entertainment"
                // checked={filters.type.Entertainment || false}
                // onChange={handleChange}
              />
              Black
            </label>
            <label htmlFor="">
              <input
                type="checkbox"
                name="type_Entertainment"
                // checked={filters.type.Entertainment || false}
                // onChange={handleChange}
              />
              Red
            </label>
            <label htmlFor="">
              <input
                type="checkbox"
                name="type_Entertainment"
                // checked={filters.type.Entertainment || false}
                // onChange={handleChange}
              />
              Pink
            </label>
          </div>
        </div>
      )}

      <div className="dropdown_footer">
        <button>Apply</button>
      </div>
    </div>
  );
};

export default Filter;
