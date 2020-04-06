import React from "react";
import Home from "./Home";
import Movie from "./Components/Movie";

import { BrowserRouter as HashRouter, Route, Switch } from "react-router-dom";
import NowPlaying from "./NowPlaying/NowPlaying";
import TopRated from "./TopRated/TopRated";
import ComingSoon from "./ComingSoon/ComingSoon";

export default function componentName() {
  return (
    <HashRouter basename={"MovieExplorer"}>
      {/* <Route path="/" component={Navbar}></Route> */}
      <Switch>
        <Route exact path="/now_playing" component={NowPlaying} />
        <Route exact path="/upcoming" component={ComingSoon} />
        <Route exact path="/top_rated" component={TopRated} />
        <Route exact path="/popular" component={Home} />
        <Route exact path="/" component={NowPlaying} />
        <Route
          path="/:id"
          render={(routerProps) => <Movie {...routerProps} />}
        />
      </Switch>
    </HashRouter>
  );
}
