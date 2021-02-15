import React from "react";
import { Link } from "react-router-dom";
import "./navOption.css";

function NavbarOption({ title, path }) {
  return (
    <li className="nav-item">
      <Link to={path} className="nav-link">
        {title}
      </Link>
    </li>
  );
}

export default NavbarOption;
