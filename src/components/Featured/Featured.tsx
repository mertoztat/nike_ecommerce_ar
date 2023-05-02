import React from "react";
import "./Featured.css";
import NikeShoe from "images/nikeshoe.png";

const Featured = () => {
  return (
    <div className="feature">
      <div className="feature_left">
        <h2>FEATURED</h2>
        <h1>NIKE SNEAKERS AIR LANCING SHOES</h1>
        <p>
          The radiance lives on Nike Sneakers Air Lancing Shoes, the basket ball
          OG that puts a fresh spin on what you know best: durably stitched
          overlays, clean finishes and the perfect amount of flash to make you
          shine.
        </p>
        <a href="https://sneakernews.com/2022/03/21/nike-lebron-2-retro-white-midnight-navy-varsity-crimson-dr0826-100/">
          Explore More
        </a>
      </div>
      <div className="feature_right">
        <img src={NikeShoe} />
      </div>
    </div>
  );
};

export default Featured;
