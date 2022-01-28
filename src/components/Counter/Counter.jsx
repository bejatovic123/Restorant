import * as React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
} from '../../redux/slices/counter.slice';

export const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  return (
    <>
      <h3 className='message'>Welcome to React Boilerplate</h3>
      <div>
        <div>
          <button
            aria-label='Increment value'
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label='Decrement value'
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
          <button onClick={() => dispatch(incrementByAmount(2))}>
            inc by 2
          </button>
        </div>
      </div>
    </>
  );
};
