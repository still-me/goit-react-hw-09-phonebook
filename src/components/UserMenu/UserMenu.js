import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import PropTypes from 'prop-types';

import './UserMenu.scss';
import { getUserName } from '../../redux/auth/auth-selectors';
import { logOut } from '../../redux/auth/auth-operations';
import defaultAvatar from '../../images/user.png';

const UserMenu = ({ avatar }) => {
  const name = useSelector(getUserName);

  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch(logOut());
  }, [dispatch]);

  return (
    <div className="user-menu__container">
      <img src={avatar} alt={name} width="32" className="user-menu__avatar" />
      <span className="user-menu__name">Welcome, {name}</span>
      <button className="user-menu__button" type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

UserMenu.defaultProps = {
  avatar: defaultAvatar,
  onLogout: () => null,
};

UserMenu.propTypes = {
  avatar: PropTypes.any,
};

export default UserMenu;
