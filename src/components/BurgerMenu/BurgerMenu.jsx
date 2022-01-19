import React from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/user.slice";

export const BurgerMenu = ({ getActiveClass, userName }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <div className="burger-menu" tabIndex={0}>
        <div />
        <div />
        <div />
      </div>
      <div className="burger-menu__options">
        <Link to="/">
          <span className={getActiveClass("/")}>Home</span>
        </Link>
        <Link to="/about">
          <span className={getActiveClass("/about")}>About</span>
        </Link>
        <Link to="/contact">
          <span className={getActiveClass("/contact")}>Contact</span>
        </Link>
        {!userName ? (
          <>
            <Link to="/register">
              <span className={getActiveClass("/register")}>Register</span>
            </Link>
            <Link to="/login">
              <span className={getActiveClass("/login")}>Login</span>
            </Link>
          </>
        ) : (
          <div
            onClick={() => {
              dispatch(logout());
              navigate("/login");
            }}
          >
            Logout
          </div>
        )}
      </div>
    </>
  );
};

BurgerMenu.propTypes = {
  getActiveClass: PropTypes.func,
  userName: PropTypes.string,
};
