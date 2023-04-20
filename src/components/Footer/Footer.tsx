import React from "react";
import "./Footer.css";
import logo from "assets/logo.png";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_logo">
        <img src={logo} alt="nike_logo" />
      </div>
      <div className="footer_desc">
        <h5>Designed & Developed by</h5>

        <h4>Hanife Erkalan & Mert Öztat</h4>

        <h5>&copy; {new Date().getFullYear()} </h5>
      </div>
      <div className="footer_social">
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
  );
};

export default Footer;
