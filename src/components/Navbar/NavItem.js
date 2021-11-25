import React, { useState, useEffect } from "react";

import styles from "./Navbar.scss";

const NavItem = (props) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    resizeCallback();
    window.addEventListener("resize", resizeCallback);

    return () => {
      window.addEventListener("resize", resizeCallback);
    };
  }, []);

  const resizeCallback = () => {
    setIsDesktop(window.innerWidth > 991);
  };

  if (isDesktop) {
    return <li className={styles.navItem}>{props.children}</li>;
  }

  return (
    <li className={styles.navItem} data-bs-toggle="collapse" data-bs-target="#navbarNav">
      {props.children}
    </li>
  );
};

export default NavItem;
