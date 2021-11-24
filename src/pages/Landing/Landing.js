import React, { Component } from "react";
import styles from "./Landing.scss";

import classnames from "classnames";

import Button from "components/Button";

export default class Landing extends Component {
  render() {
    return (
      <div className={styles.landingHero}>
        <div className={styles.heroTitleWrapper}>
          <h1>
            <span className={styles.heroTitleTop}>ABC</span> Company
          </h1>
          <Button>
            <h2 style={{ margin: 0 }}>(offering XYZ services)</h2>
          </Button>
        </div>
      </div>
    );
  }
}
