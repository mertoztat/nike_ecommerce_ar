import "./Banner.css";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="banner_container">
      <div className="leftBanner">
        <div className="left_items">
          <div className="leftCardItem">
            <img
              src="https://nike-ecommerce-with-react-vite-tailwind-29o7.vercel.app/assets/product6-931b596e.png "
              alt=""
            />
          </div>
          <div className="leftCardItem">
            <img
              src="https://nike-ecommerce-with-react-vite-tailwind-29o7.vercel.app/assets/product6-931b596e.png "
              alt=""
            />
          </div>
          <div className="leftCardItem">
            <img
              src="https://nike-ecommerce-with-react-vite-tailwind-29o7.vercel.app/assets/product6-931b596e.png "
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="centerBanner">
        <h1>Explore the Nike AR Sneakers World</h1>
        <h2>Open the box!</h2>
        <button className="btn_explorer">Explore Nike AR Sneakers</button>
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
