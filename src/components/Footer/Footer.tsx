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
        <div className="footer_item">
          <a href="https://reactfiberportfoliowebsite.vercel.app/">
            Hanife Erkalan
          </a>{" "}
          & <a href="https://mertoztat.dev/">Mert Öztat</a>
        </div>

        <h5>&copy; {new Date().getFullYear()} </h5>
      </div>
      <div className="footer_social">
        <ul>
          <li>
            <a href="https://www.facebook.com/nike">
              <FaFacebook size={25} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/Nike">
              <FaTwitter size={25} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/nike/">
              <FaInstagram size={25} />
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
  );
};

export default Footer;
