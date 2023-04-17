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
        <h1> HIGHLIGHTS</h1>
        <p>
          Our Purpose is to move the world forward. We take action by building
          community,
          <br /> protecting our planet and increasing access to sport.
        </p>
        <button>Explora More</button>
      </div>
    </div>
  );
};

export default Highlights;
