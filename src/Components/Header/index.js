import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <NavLink to={"/now_playing"}>
            {" "}
            <h3>Movie Explorer</h3>
          </NavLink>

          {/* <NavLink
            activeStyle={{ color: "red" }}
            style={{ color: "white" }}
            to="/"
          >
            Home
          </NavLink> */}

          <NavLink
            activeStyle={{ color: "red" }}
            style={{ color: "white" }}
            to="/now_playing"
          >
            Now Playing
          </NavLink>
          <NavLink
            activeStyle={{ color: "red" }}
            style={{ color: "white" }}
            to="/popular"
          >
            Popular
          </NavLink>
          <NavLink
            activeStyle={{ color: "red" }}
            style={{ color: "white" }}
            to="/top_rated"
          >
            Top Rated
          </NavLink>
          <NavLink
            activeStyle={{ color: "red" }}
            style={{ color: "white" }}
            to="/upcoming"
          >
            Coming Soon
          </NavLink>

          <div className="search">
            <form onSubmit={this.props.onSubmit}>
              <i className="fas fa-search"></i>
              <input
                onChange={(event) => this.props.onChange(event)}
                placeholder="Search movies…"
                className="inputRoot"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
