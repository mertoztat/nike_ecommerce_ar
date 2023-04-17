import React from "react";
import "./Popular.css";
import Nikepopular1 from "assets/nikepopular1.png";
import Nikepopular2 from "assets/nikepopular2.png";
import Nikepopular3 from "assets/nikepopular3.png";
import { AiFillStar } from "react-icons/ai";

const Popular = () => {
  return (
    <div className="popular">
      <div className="popular_title">
        <h3>Popular Sales</h3>
      </div>
      <div className="popular_cards">
        <div className="card_1">
          <div className="popular_card_desc">
            <h6>Nike Martine Rose</h6>
            <div className="popular_card_fav">
              <AiFillStar /> 5+
            </div>
          </div>

          <img src={Nikepopular1} />
        </div>
        <div className="card_2">
          <div className="popular_card_desc">
            <h6>Nike Martine Rose Red</h6>
            <div className="popular_card_fav">
              <AiFillStar /> 4.6
            </div>
          </div>

          <img src={Nikepopular2} />
        </div>
        <div className="card_3">
          <div className="popular_card_desc">
            <h6>Nike Martine Rose</h6>
            <div className="popular_card_fav">
              <AiFillStar /> 4.2
            </div>
          </div>

          <img src={Nikepopular3} />
        </div>
      </div>
    </div>
  );
};

export default Popular;
