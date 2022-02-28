import React from "react";

import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Route from "./Route";

import Login from "../pages/Login";

const Routes: React.FC = ({}) => {
  return (
    <Switch>
      <Route path="/" component={Login} />
    </Switch>
  );
};

export default Routes;
