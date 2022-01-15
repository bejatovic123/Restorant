import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";

export const Header = () => {
  const location = useLocation();
  const userName = useSelector((state) => state.user.name);
  const getActiveClass = (path) => (location.pathname === path ? "active" : "");
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="logo" />
      </Link>
      <span>
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
          {!userName && (
            <>
              <Link to="/register">
                <span className={getActiveClass("/register")}>Register</span>
              </Link>
              <Link to="/login">
                <span className={getActiveClass("/login")}>Login</span>
              </Link>
            </>
          )}
        </nav>
        {!!userName && <div>{userName[0]?.toUpperCase()}</div>}
      </span>
    </header>
  );
};
