import React from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/slices/user.slice";

const Register = () => {
  const dispatch = useDispatch();
  return (
    <div className="register-page">
      <h1>Register</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(setUser(e.target[0].value));
        }}
      >
        <div className="register-page__input-group">
          <label>Name:</label>
          <input type="text" />
        </div>
        <div className="register-page__input-group">
          <label>Email:</label>
          <input type="text" />
        </div>
        <div className="register-page__input-group">
          <label>Phone:</label>
          <input type="text" />
        </div>
        <div className="register-page__input-group">
          <label>Password:</label>
          <input type="password" />
        </div>
        <div className="register-page__input-group">
          <label>Confirm Password:</label>
          <input type="password" />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
