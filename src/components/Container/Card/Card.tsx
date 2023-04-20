import Model from "components/Models/Model/Model";
import React from "react";
import "./Card.css";
export interface IProps {
  data: any;
}
const Card: React.FC<IProps> = ({ data }) => {
  return (
    <div className="card">
      <Model data={data} />
    </div>
  );
};

export default Card;
