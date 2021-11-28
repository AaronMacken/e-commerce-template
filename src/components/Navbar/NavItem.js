import React, { useState, useEffect } from "react";
import rootStore from "data/stores";
import styles from "./Navbar.scss";

class NavItem extends React.Component {
    constructor(props) {
        super(props);

        Object.assign(this, { rootStore });
    }

    componentDidMount() { 
        const { uiStore } = this.rootStore;
         uiStore.setIsDesktop();
         window.addEventListener("resize", uiStore.setIsDesktop)
        }

    componentWillUnmount() { 
        const { uiStore } = this.rootStore;
         uiStore.setIsDesktop();
         window.removeEventListener("resize", uiStore.setIsDesktop)
        }

    render() {
        if (this.rootStore.uiStore.isDesktop) {
            return <li className={styles.navItem}>{this.props.children}</li>;
        }
        return (
            <li className={styles.navItem} data-bs-toggle="collapse" data-bs-target="#navbarNav">
                {this.props.children}
            </li>
        )    
    }
}

export default NavItem;
