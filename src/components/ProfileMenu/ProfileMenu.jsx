import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../redux/slices/user.slice';
import PropTypes from 'prop-types';

export const ProfileMenu = ({ userName }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className='profile-menu' tabIndex={0}>
      <div className='profile-menu__avatar'>{userName[0]?.toUpperCase()}</div>
      <div className='profile-menu__options'>
        <span
          onClick={() => {
            dispatch(logout());
            navigate('/login');
          }}
        >
          Logout
        </span>
      </div>
    </div>
  );
};

ProfileMenu.propTypes = {
  userName: PropTypes.string,
};
