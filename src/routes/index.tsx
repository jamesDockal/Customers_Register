import React from "react";

import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Route from "./Route";

import Login from "../pages/Login";
import Home from "../pages/Home";

const Routes: React.FC = ({}) => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} isPrivate />
    </Switch>
  );
};

export default Routes;
