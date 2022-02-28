import React from "react";

import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Route from "./Route";

import Login from "../pages/Login";
import Home from "../pages/Home";
import CustomersCreate from "../pages/Customers/Create";
import CustomersEdit from "../pages/Customers/Edit";

const Routes: React.FC = ({}) => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} isPrivate />
      <Route
        exact
        path="/customers/create"
        component={CustomersCreate}
        isPrivate
      />
      <Route
        exact
        path="/customers/edit/:id"
        component={CustomersEdit}
        isPrivate
      />
    </Switch>
  );
};

export default Routes;
