import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h5>Designed & Developed by</h5>
      <h4>
        <h5>Hanife Erkalan & Mert Öztat</h5>
      </h4>
      <h5>&copy; {new Date().getFullYear()} </h5>
    </div>
  );
};

export default Footer;
