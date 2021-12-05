import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

import {
  FaContao,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <FaContao size={30} />
          <h3>CS APP</h3>
        </Link>
      </div>

      <div className="header__nav">
        <Link to="/">Página Principal</Link>
        <Link to="/create">Abrir OS</Link>

        <Link to="/query">Consultar OS</Link>
      </div>

      <div className="header__socialmedia">
        <Link to="/">
          <FaFacebookF size={20} />
        </Link>
        <Link to="/">
          <FaInstagram size={20} />
        </Link>
        <Link to="/">
          <FaLinkedinIn size={20} />
        </Link>
        <Link to="/">
          <FaGithub size={20} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
