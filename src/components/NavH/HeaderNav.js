/*eslint-disable react/prop-types*/
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Cart } from '../Cart/Cart';
import { CartToggle } from '../../App';
import { HeaderCartButton } from './HeaderCartButton';

const HeaderNav = (props) => {
  const [cartIsShown, showCartHandler, hideCartHandler] =
    useContext(CartToggle);
  console.log(showCartHandler);
  return (
    <>
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
        {!!props.userName && (
          <Link to='/menu'>
            <span className={props.getActiveClass('/menu')}>Menu</span>
          </Link>
        )}

        {!props.userName && (
          <>
            <Link to='/register'>
              <span className={props.getActiveClass('/register')}>
                Register
              </span>
            </Link>
            <Link to='/login'>
              <span className={props.getActiveClass('/login')}>Login</span>
            </Link>
          </>
        )}
      </nav>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      {!!props.userName && <HeaderCartButton onClick={props.onShowCart} />}
    </>
  );
};

export default HeaderNav;
