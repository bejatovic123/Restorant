import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";

export const Header = () => {
  const location = useLocation();
  const getActiveClass = (path) => (location.pathname === path ? "active" : "");
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="logo" />
      </Link>
      <nav>
        <Link to="/">
          <span className={getActiveClass("/")}>Home</span>
        </Link>
        <Link to="/about">
          <span className={getActiveClass("/about")}>About</span>
        </Link>
        <Link to="/contact">
          <span className={getActiveClass("/contact")}>Contact</span>
        </Link>
      </nav>
    </header>
  );
};
