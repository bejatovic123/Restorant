/*eslint-disable react/prop-types*/

import React, { useContext } from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';

export const HeaderCartButton = (props) => {
  /* const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);*/
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const { onClick } = props;

  console.log('onClıck ==> ', onClick);

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  /*const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ''
  }`;*/

  /*useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);*/

  return (
    <button className='cart__button' onClick={props.onClick}>
      <span className='cart__icon'>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className='cart__badge'>{numberOfCartItems}</span>
    </button>
  );
};
