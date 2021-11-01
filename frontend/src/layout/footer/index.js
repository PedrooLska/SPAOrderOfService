import React from "react";
import "./index.css";

import { IoMdHeart } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="footer">
      <h3 className="footer__title">Pedro Lucas</h3>
      <IoMdHeart className="footer__icon" color="red" size="20px" />
    </footer>
  );
};

export default Footer;
