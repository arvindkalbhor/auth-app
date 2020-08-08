import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import { createBrowserHistory } from 'history'
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/forgot-password" component={Login} />
        <Route path="/home" component={Home} />
      </Switch>
    </Router>
  );
}

export default Routes;
