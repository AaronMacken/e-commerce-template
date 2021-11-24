import React, { useState, useEffect } from "react";

const NavItem = (props) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    console.log("works in prod? - setting is desktop", window);

    window.addEventListener("resize", setIsDesktop(window.innerWidth > 991));

    return () => {
      window.addEventListener("resize", setIsDesktop(window.innerWidth > 991));
    };
  }, []);

  if (isDesktop) {
    return <li className="nav-item">{props.children}</li>;
  }

  return (
    <li className="nav-item" data-toggle="collapse" data-target="#navbarNav">
      {props.children}
    </li>
  );
};

export default NavItem;
