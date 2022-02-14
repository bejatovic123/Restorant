/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const HeaderNav = (props) => {
  return (
    <nav>
      <Link to='/'>
        <span className={props.getActiveClass('/')}>Home</span>
      </Link>
      <Link to='/about'>
        <span className={props.getActiveClass('/about')}>About</span>
      </Link>
      <Link to='/contact'>
        <span className={props.getActiveClass('/contact')}>Contact</span>
      </Link>
      {!props.userName && (
        <>
          <Link to='/register'>
            <span className={props.getActiveClass('/register')}>Register</span>
          </Link>
          <Link to='/login'>
            <span className={props.getActiveClass('/login')}>Login</span>
          </Link>
        </>
      )}
    </nav>
  );
};

export default HeaderNav;
