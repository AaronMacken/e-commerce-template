import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import NavItem from "./NavItem";

const activeStyle = { fontWeight: "700" };

export default class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand">ABC</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <NavItem>
                <NavLink exact to="/" activeStyle={activeStyle} className="hover">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink exact to="/products" activeStyle={activeStyle} className="hover">
                  Products
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink exact to="/products/asdf123" activeStyle={activeStyle} className="hover">
                  Specific Product
                </NavLink>
              </NavItem>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
