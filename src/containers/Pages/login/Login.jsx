import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../../redux/slices/user.slice';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //const [nameIsValid, setNameIsValid] = useState(true);

  return (
    <div className='login-page'>
      <h1>Login</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(setUser(e.target[0].value));
          e.target[0].value && navigate('/');
        }}
      >
        <div className='login-page__input-group'>
          <label>Username:</label>
          <input type='text' />
        </div>
        <div className='login-page__input-group'>
          <label>Password:</label>
          <input type='password' />
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default Login;
