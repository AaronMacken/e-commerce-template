import React, { Component } from "react";
import styles from "./Products.scss";

import pngImage from "images/png.png";
import jpgImage from "images/jpg.jpg";
import svgImage from "images/svg.svg";

import rootStore from "data/stores";

export default class Product extends Component {
  constructor(props) {
    super(props);

    Object.assign(this, { rootStore });
  }

  render() {
    console.log("stores?", this.rootStore);

    return (
      <div>
        <h1 className={styles.title}>Products Page</h1>
        <img className={styles.sampleImg} src={pngImage} />
        <img className={styles.sampleImg} src={jpgImage} />
        <img className={styles.sampleImg} src={svgImage} />
      </div>
    );
  }
}
