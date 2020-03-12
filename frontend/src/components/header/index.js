import React from "react";
import "./index.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <a href="#">
          <h2>My App</h2>
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
            <a href="#">Facebook</a>
          </li>

          <li>
            <a href="#">Instagram</a>
          </li>

          <li>
            <a href="#">Linkedin</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
