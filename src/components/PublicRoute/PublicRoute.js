import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { getIsAuthenticated } from '../../redux/auth/auth-selectors';

const PublicRoute = ({ children, redirectTo, ...routeProps }) => {
  const isAuthenticated = useSelector(getIsAuthenticated);

  return (
    <Route {...routeProps}>
      {isAuthenticated && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        children
      )}
    </Route>
  );
};

PublicRoute.propTypes = {
  redirectTo: PropTypes.string.isRequired,
};

export default PublicRoute;
