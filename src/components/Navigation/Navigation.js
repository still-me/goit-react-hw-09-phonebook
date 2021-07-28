import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './Navigation.scss';
import routes from '../../utils/routes';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';

const Navigation = () => {
  const isAuthenticated = useSelector(getIsAuthenticated);

  return (
    <nav>
      <NavLink
        to={routes.home}
        exact
        className="navigation__link"
        activeClassName="navigation__link--active"
      >
        Main
      </NavLink>
      {isAuthenticated && (
        <NavLink
          to={routes.contacts}
          exact
          className="navigation__link"
          activeClassName="navigation__link--active"
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
