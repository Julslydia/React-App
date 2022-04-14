import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="header-white footer bcg-color">
      <div className="navbar-split-footer">
        <p className="navbar-split-footer">
          Nazwa firmy - wszelkie prawa zastrzeżone, 2022
        </p>
        <div className="social a navbar-split-footer">
          <a href="https://www.instagram.com/?hl=pl">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/">
            <FaFacebookSquare />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
