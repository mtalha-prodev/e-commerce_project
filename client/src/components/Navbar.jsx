import React, { useState } from "react";
import NavbarOption from "./navOption/NavbarOption";
import "./navbar.css";
import SideBar from "./sideNavbar/SideBar";

function Navbar() {
  return (
    <>
      <div className="navbar navbar-expand-lg">
        <div className="navbar-left-side">
          <SideBar />
        </div>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
            <NavbarOption title="Home" path="/" />
            <NavbarOption title="About" path="/about" />
            <NavbarOption title="Contact" path="/contact" />
            <NavbarOption title="Service" path="/service" />
          </ul>
        </div>

        <div className="left side">right</div>
      </div>
    </>
  );
}

export default Navbar;
