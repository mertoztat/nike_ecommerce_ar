import ModelBox from "components/Models/ModelBox/ModelBox";
import "./Banner.css";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import ModelCard from "components/Models/ModelCard/ModelCard";

const Banner = () => {
  return (
    <div className="banner_container">
      <div className="leftBanner">
        <div className="left_items">
          <ModelCard />
        </div>
      </div>
      <div className="centerBanner">
        <h1>Explore the Nike AR Sneakers World</h1>
        <ModelBox />
        <button className="btn_explorer">Open the box!</button>
      </div>
      <div className="rightBanner">
        <div className="right_items">
          <ul>
            <li>
              <FaFacebook size={30} />
            </li>
            <li>
              <FaTwitter size={30} />
            </li>
            <li>
              <FaInstagram size={30} />
            </li>
            <li>
              <FaYoutube size={30} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
