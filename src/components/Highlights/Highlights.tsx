import ModelBox from "components/Models/ModelBox/ModelBox";
import React from "react";
import "./Highlights.css";

const Highlights = () => {
  return (
    <div className="highlights">
      <div className="highlights_left">
        <ModelBox
          iosSrc="/assets/Nike.usdz"
          glbSrc="/assets/nike.glb"
          width="30em"
          height="30em"
        />
      </div>
      <div className="highlights_right">
        <h2> HIGHLIGHTS</h2>
        <h1> NIKE ABOUT US</h1>
        <p>
          The world's largest athletic apparel company, Nike is best known for
          its footwear, apparel, and equipment.
          <br /> Founded in 1964 as Blue Ribbon Sports, the company became Nike
          in 1971 after the Greek goddess of victory.
          <br /> One of the most valuable brands among sport businesses, Nike
          employs over 76,000 people worldwide.
        </p>
        <a href="https://www.nike.com/tr/">Explora More</a>
      </div>
    </div>
  );
};

export default Highlights;
