import React, { useState, useEffect } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import "./Filter.css";

export interface IProps {
  data: any;
  setData: (state: any) => void;
}
const Filter: React.FC<IProps> = ({ data, setData }) => {
  const [showGender, setShowGender] = useState<boolean>(false);
  const [showColor, setShowColor] = useState<boolean>(false);
  const [showPrice, setShowPrice] = useState<boolean>(false);

  // filtersları karşılaştırdığımız object
  const [filters, setFilters] = useState({
    price: {
      price200: false,
      price250: false,
      price300: false,
      price500: false,
    },
    gender: {
      Man: false,
      Woman: false,
      Unisex: false,
    },
    color: {
      Orange: false,
      Yellow: false,
      Blue: false,
      White: false,
      Black: false,
      Red: false,
      Pink: false,
    },
  });

  // input name ve checked eşleşmesini yapan fonksiyon
  const handleChange = (e: any) => {
    const { name, checked } = e.target;
    const [category, key] = name.split("_");
    console.log("seçilenn", category, key);
    setFilters((prevFilters: any) => ({
      ...prevFilters,
      [category]: {
        ...prevFilters[category],
        [key]: checked,
      },
    }));
    console.log("filters", filters, "checkedd", checked, name);
  };
  // filtreleme işlemini yapan fonksiyon
  const multiFilter = () => {
    const { gender, color, price } = filters;

    return data.filter((item: any) => {
      const { type: priceType, genderItem, colorItem } = item;

      const typeMatches =
        (!price.price200 &&
          !price.price250 &&
          !price.price300 &&
          !price.price500) || // None of the type filters are selected
        (price.price200 && priceType === "200") ||
        (price.price250 && priceType === "250") ||
        (price.price300 && priceType === "300") ||
        (price.price500 && priceType === "500");

      const capacityMatches =
        (!gender.Man && !gender.Woman && !gender.Unisex) || // None of the capacity filters are selected
        (gender.Man && genderItem === "Man") ||
        (gender.Woman && genderItem === "Woman") ||
        (gender.Unisex && genderItem === "Unisex");

      const ColorMatches =
        (!color.Orange &&
          !color.Pink &&
          !color.Black &&
          !color.Blue &&
          !color.Red &&
          !color.White &&
          !color.Yellow) || // None of the capacity filters are selected
        (color.Orange && colorItem === "Orange") ||
        (color.Black && colorItem === "Black") ||
        (color.Blue && colorItem === "Blue") ||
        (color.Pink && colorItem === "Pink") ||
        (color.Red && colorItem === "Red") ||
        (color.White && colorItem === "White") ||
        (color.Yellow && colorItem === "Yellow");

      return typeMatches && capacityMatches && ColorMatches;
    });
  };

  useEffect(() => {
    console.log("rendered");
  }, [filters]);

  const applyButton = () => {
    const filterRender = multiFilter();
    if (
      filters.price.price200 ||
      filters.price.price250 ||
      filters.price.price300 ||
      filters.price.price500 ||
      filters.gender.Man ||
      filters.gender.Woman ||
      filters.gender.Unisex ||
      filters.color.Black ||
      filters.color.Blue ||
      filters.color.Orange ||
      filters.color.Pink ||
      filters.color.Red ||
      filters.color.White ||
      filters.color.Yellow
    ) {
      setData(filterRender);
    } else {
      setData(data);
    }
  };
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
                name="price_price200"
                checked={filters.price.price200 || false}
                onChange={handleChange}
              />
              200$
            </label>
            <label htmlFor="">
              <input
                type="checkbox"
                name="price_price250"
                checked={filters.price.price250 || false}
                onChange={handleChange}
              />
              250$
            </label>
            <label htmlFor="">
              <input
                type="checkbox"
                name="price_price300"
                checked={filters.price.price300 || false}
                onChange={handleChange}
              />
              300$
            </label>
            <label htmlFor="">
              <input
                type="checkbox"
                name="price_price500"
                checked={filters.price.price500 || false}
                onChange={handleChange}
              />
              500$
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
                name="gender_Man"
                checked={filters.gender.Man || false}
                onChange={handleChange}
              />
              Man
            </label>
            <label htmlFor="">
              <input
                type="checkbox"
                name="gender_Woman"
                checked={filters.gender.Woman || false}
                onChange={handleChange}
              />
              Woman
            </label>
            <label htmlFor="">
              <input
                type="checkbox"
                name="gender_Unisex"
                checked={filters.gender.Unisex || false}
                onChange={handleChange}
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
                name="color_Orange"
                checked={filters.color.Orange || false}
                onChange={handleChange}
              />
              Orange
            </label>
            <label htmlFor="">
              <input
                type="checkbox"
                name="color_Yellow"
                checked={filters.color.Yellow || false}
                onChange={handleChange}
              />
              Yellow
            </label>
            <label htmlFor="">
              <input
                type="checkbox"
                name="color_Blue"
                checked={filters.color.Blue || false}
                onChange={handleChange}
              />
              Blue
            </label>
            <label htmlFor="">
              <input
                type="checkbox"
                name="color_White"
                checked={filters.color.White || false}
                onChange={handleChange}
              />
              White
            </label>
            <label htmlFor="">
              <input
                type="checkbox"
                name="color_Black"
                checked={filters.color.Black || false}
                onChange={handleChange}
              />
              Black
            </label>
            <label htmlFor="">
              <input
                type="checkbox"
                name="color_Red"
                checked={filters.color.Red || false}
                onChange={handleChange}
              />
              Red
            </label>
            <label htmlFor="">
              <input
                type="checkbox"
                name="color_Pink"
                checked={filters.color.Pink || false}
                onChange={handleChange}
              />
              Pink
            </label>
          </div>
        </div>
      )}

      <div className="dropdown_footer">
        <button onClick={applyButton}>Apply</button>
      </div>
    </div>
  );
};

export default Filter;
