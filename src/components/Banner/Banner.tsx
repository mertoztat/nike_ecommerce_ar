import ModelBox from "components/Models/ModelBox/ModelBox";
import "./Banner.css";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import ModelCard from "components/Models/ModelCard/ModelCard";
import React, { useState } from "react";

const Banner = () => {
  const [box, setBox] = useState<boolean>(false);

  return (
    <div className="banner_container">
      <div className="leftBanner">
        <div className="left_items">
          <ModelCard />
        </div>
      </div>
      <div className="centerBanner">
        <h1>Explore the Nike AR Sneakers World</h1>
        {box ? (
          <ModelBox
            iosSrc="/assets/NikeOpenBox.usdz"
            glbSrc="/assets/NikeOpenBox.glb"
            // width="20em"
            // height="20em"
          />
        ) : (
          <ModelBox
            iosSrc="/assets/nikeBox.usdz"
            glbSrc="/assets/nikeBox.glb"
            // width="20em"
            // height="20em"
          />
        )}
        {box ? (
          <button className="btn_explorer" onClick={() => setBox(false)}>
            Close the box!
          </button>
        ) : (
          <button className="btn_explorer" onClick={() => setBox(true)}>
            Open the box!
          </button>
        )}
      </div>
      <div className="rightBanner">
        <div className="right_items">
          <ul>
            <li>
              <a href="https://www.facebook.com/nike">
                <FaFacebook size={30} />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/Nike">
                <FaTwitter size={30} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/nike/">
                <FaInstagram size={30} />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/user/nike">
                <FaYoutube size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
