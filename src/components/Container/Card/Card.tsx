import Model from "components/Models/Model/Model";
import React from "react";
import "./Card.css";
export interface IProps {
  filteredData: any;
}
const Card: React.FC<IProps> = ({ filteredData }) => {
  return (
    <div className="card">
      <Model filteredData={filteredData} />
    </div>
  );
};

export default Card;
