import React from "react";
import { Link } from "react-router-dom";

function SideOption({ title, path, Icon }) {
  return (
    <div>
      <li className="nav-item mega-link">
        <Link to={path} className="nav-link">
          {title}
        </Link>
        <Link to="#" className="arrow-Icon">
          {Icon}
        </Link>
      </li>
    </div>
  );
}

export default SideOption;
