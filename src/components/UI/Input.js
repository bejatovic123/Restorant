/*eslint-disable react/prop-types*/
/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';

const Input = forwardRef((props, ref) => {
  return (
    <div className='UI__Input'>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
