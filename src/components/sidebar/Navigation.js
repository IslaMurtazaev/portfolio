import React from "react";
import NavItem from "./NavItem";

const Navigation = () => (
  <nav id="colorlib-main-menu" role="navigation" className="navbar">
    <div id="navbar" className="collapse">
      <ul>
        <NavItem className="active" target="home" text="Introduction" />
        <NavItem target="about" text="About" />
        <NavItem target="timeline" text="Timeline" />
      </ul>
    </div>
  </nav>
);

export default Navigation;
