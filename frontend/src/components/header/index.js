import React from "react";
import { Link } from "react-router-dom";
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
        <Link to="/">
          <FaContao />
          <h2>CS APP</h2>
        </Link>
      </div>

      <div className="header__nav">
        <ul>
          <li>
            <Link to="/">Página Principal</Link>
          </li>

          <li>
            <Link to="/create">Abrir OS</Link>
          </li>

          <li>
            <Link to="/query">Consultar OS</Link>
          </li>
        </ul>
      </div>

      <div className="header__socialmedia">
        <ul>
          <li>
            <Link href="/">
              <FaFacebookF />
            </Link>
          </li>

          <li>
            <Link to="/">
              <FaInstagram />
            </Link>
          </li>

          <li>
            <Link to="/">
              <FaLinkedinIn />
            </Link>
          </li>

          <li>
            <Link to="/">
              <FaGithub />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
