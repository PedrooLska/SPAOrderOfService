import React from "react";
import "./index.css";

import {
  FaContao,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub
} from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <a href="#">
          <FaContao />
          <h2>CS APP</h2>
        </a>
      </div>

      <div className="header__nav">
        <ul>
          <li>
            <a href="#">Página Principal</a>
          </li>

          <li>
            <a href="#">Abrir OS</a>
          </li>

          <li>
            <a href="#">Consultar OS</a>
          </li>
        </ul>
      </div>

      <div className="header__socialmedia">
        <ul>
          <li>
            <a href="#">
              <FaFacebookF />
            </a>
          </li>

          <li>
            <a href="#">
              <FaInstagram />
            </a>
          </li>

          <li>
            <a href="#">
              <FaLinkedinIn />
            </a>
          </li>

          <li>
            <a href="#">
              <FaGithub />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
