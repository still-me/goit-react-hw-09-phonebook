import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { getIsAuthenticated } from '../../redux/auth/auth-selectors';

const PrivateRoute = ({ children, redirectTo, ...routeProps }) => {
  const isAuthenticated = useSelector(getIsAuthenticated);
  return (
    <Route {...routeProps}>
      {isAuthenticated ? children : <Redirect to={redirectTo} />}
    </Route>
  );
};

PrivateRoute.propTypes = {
  redirectTo: PropTypes.string.isRequired,
};

export default PrivateRoute;
