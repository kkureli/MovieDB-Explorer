import React from "react";
import Home from "./Home";
import Movie from "./Components/Movie";
import Navbar from "./Components/Header/";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function componentName() {
  return (
    <Router>
      {/* <Route path="/" component={Navbar}></Route> */}
      <Switch>
        <Route exact path="/home" render={() => <Home />} />

        <Route path="/:id" render={routerProps => <Movie {...routerProps} />} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}
