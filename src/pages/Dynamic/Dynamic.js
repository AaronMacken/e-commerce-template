import React, { Component } from "react";

export default class Dynamic extends Component {
  componentDidMount() {
    console.log("axios request using ID: ", this.props.match.params.id);
  }

  render() {
    console.log("derp?", this.props.derp);
    return <h1>Dynamic Page: {this.props.match.params.id} </h1>;
  }
}
