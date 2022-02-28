import React from "react";
import {
  Redirect,
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
} from "react-router-dom";
import { useAuth } from "../Context/authContext";

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
  pageId?: string;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  pageId,
  ...rest
}) => {
  // const { user } = useAuth();

  const { token } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return !isPrivate ? (
          <Component />
        ) : !!token ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        );
      }}
    />
  );
};

export default Route;
