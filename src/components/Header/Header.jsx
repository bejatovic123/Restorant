import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { ThemeContext } from '../../App';
import logo from '../../assets/logo.png';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { ProfileMenu } from '../ProfileMenu/ProfileMenu';
import HeaderNav from '../NavH/HeaderNav';
import { CartToggle } from '../../App';

export const Header = () => {
  const [cartIsShown, showCartHandler] = useContext(CartToggle);
  console.log('cartIsShown ', cartIsShown);
  const [theme, changeTheme] = useContext(ThemeContext);
  const location = useLocation();
  const userName = useSelector((state) => state.user.name);
  const getActiveClass = (path) => (location.pathname === path ? 'active' : '');
  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__logo' src={logo} alt='logo' />
      </Link>
      <span className='header__right-section'>
        <button onClick={changeTheme}>
          {theme === 'black' ? 'Light' : 'Dark'} Mode
        </button>
        <HeaderNav
          onShowCart={showCartHandler}
          {...{ userName, getActiveClass }}
        />
        {!!userName && <ProfileMenu userName={userName} />}
      </span>
      <BurgerMenu {...{ getActiveClass, userName }} />
    </header>
  );
};
