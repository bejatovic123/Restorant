/*eslint-disable react/prop-types*/

import React, { useContext } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';

import CartContext from '../../store/cart-context';

export const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className='Cart__modal'>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className='Modal__total'>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className='Modal__action'>
        <button onClick={props.onClose}>Close</button>
        {hasItems && <button className='Modal__button'>Order</button>}
      </div>
    </Modal>
  );
};
