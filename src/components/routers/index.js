import React from "react";
import "../../styles.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Home } from "../contents";
import { FormLogin, Register } from "../login";
import { Profile } from "../profile";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import NoFound from "./NoFound";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Routers() {
  return (
    <Router>
      <Switch>
        <PublicRoute path="/login" exact component={FormLogin} />
        <PublicRoute path="/register" exact component={Register} />
        <PrivateRoute path="/" exact component={Home} />
        <PrivateRoute path="/:username/profile" exact component={Profile} />
        <PublicRoute path="*" exact component={NoFound} />
      </Switch>
    </Router>
  );
}
