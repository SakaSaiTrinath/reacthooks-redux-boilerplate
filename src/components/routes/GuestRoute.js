import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const GuestRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector(state => !!state.user.token);
  return (
    <Route
      {...rest}
      render={props =>
        !isAuthenticated ? <Component {...props} /> : <Redirect to="/home" />
      }
    />
  );
};

GuestRoute.propTypes = {
  component: PropTypes.func.isRequired
};

export default GuestRoute;
