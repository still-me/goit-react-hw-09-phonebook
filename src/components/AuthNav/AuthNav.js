import { NavLink } from 'react-router-dom';

import './AuthNav.scss';
import routes from '../../utils/routes';

const AuthNav = () => (
  <div>
    <NavLink
      to={routes.register}
      exact
      className="auth-nav__link"
      activeClassName="auth-nav__link--active"
    >
      Sign Up
    </NavLink>
    <NavLink
      to={routes.login}
      exact
      className="auth-nav__link"
      activeClassName="auth-nav__link--active"
    >
      Log In
    </NavLink>
  </div>
);

export default AuthNav;
