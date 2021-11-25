import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import NavItem from "./NavItem";

import classnames from "classnames";
import styles from "./Navbar.scss";

const activeStyle = { fontWeight: "700" };

export default class Navbar extends Component {
  render() {
    const navbarCls = classnames(styles.navbar, "navbar navbar-expand-lg navbar-light bg-light");
    const navbarBrandCls = classnames(styles.navbarBrand);
    return (
      <nav className={navbarCls}>
        <div className="container-fluid">
          <p className={navbarBrandCls}>ABC</p>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <NavItem>
                <NavLink exact to="/" activeStyle={activeStyle} className={styles.item}>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink exact to="/products" activeStyle={activeStyle} className={styles.item}>
                  Products
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  exact
                  to="/products/asdf123"
                  activeStyle={activeStyle}
                  className={styles.item}
                >
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
