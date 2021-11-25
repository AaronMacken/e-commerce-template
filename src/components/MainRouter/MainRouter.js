import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import LandingPage from "pages/Landing";
import ProductsPage from "pages/Products";
import DynamicPage from "pages/Dynamic";

import Navbar from "components/Navbar";
import Footer from "components/Footer";

class MainRouter extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/products" component={ProductsPage} />
          <Route path="/products/:id" render={(props) => <DynamicPage derp="derp" {...props} />} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default MainRouter;
