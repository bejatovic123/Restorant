/*eslint-disable react/prop-types*/

import React from 'react';

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className='Cart__Item'>
      <div>
        <h2>{props.name}</h2>
        <div className='Cart__Summary'>
          <span className='Cart__price'>{price}</span>
          <span className='Cart__amount'>x {props.amount}</span>
        </div>
      </div>
      <div className='Cart__actions'>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
