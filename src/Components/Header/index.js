import React from "react";
import "./styles.css";
import NavBar from "../Navbar";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <h3>Movie Explorer</h3>
          <Link to="/">
            <button type="button" class="btn btn-primary">
              Home
            </button>
          </Link>

          <div className="search">
            <form onSubmit={this.props.onSubmit}>
              <i className="fas fa-search"></i>
              <input
                onChange={event => this.props.onChange(event)}
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
