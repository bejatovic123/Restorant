import React from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className='footer'>
      <Link to='/'>
        <img className='footer__logo' src={logo} alt='logo' />
      </Link>
      <span>contact_us@mail.com</span>
    </footer>
  );
};
