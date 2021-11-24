import React, { Component } from "react";
import styles from "./Landing.scss";

import classnames from "classnames";

import Title from "components/Title"
import Button from "components/Button";

export default class Landing extends Component {
  render() {
    return (
      <>
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
        <div>
            <Title title="Features" subTitle="Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae." />
        </div>
        <div>
            {/* Placeholder for Feature Cards */}
            <h2 style={{color: "red", margin: "100px auto"}}>--PLACEHOLDER FOR FEATURE CARDS--</h2>
        </div>
        <div>
            <Title title="Testimonials" subTitle="Our customers love us! Read what they have to say below. Blah blah blah blah blah blah blah blah blah and such." />
        </div>
        <div>
            {/* Placeholder for Testimonials */}
            <h2 style={{color: "red", margin: "100px auto"}}>--PLACEHOLDER FOR TESTIMONIALS--</h2>
        </div>
      </>
    );
  }
}
