import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import ProductsPage from "pages/Products";
import DynamicPage from "pages/Dynamic";

import Navbar from "components/Navbar";
import Footer from "components/Footer";

class MainRouter extends Component {
  sampleHomeComponent = () => {
    return <h1>e-commerce template</h1>;
  };

  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={this.sampleHomeComponent} />
          <Route path="/products" component={ProductsPage} />
          <Route path="/data/:id" render={(props) => <DynamicPage derp="derp" {...props} />} />
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
