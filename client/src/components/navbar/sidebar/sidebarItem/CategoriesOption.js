import React from "react";
import { CLOSE_SIDEBAR } from "../../../../useReducer/actionType";
import { Link } from "react-router-dom";
function CategoriesOption({ title, path, menuDispatch }) {
  return (
    <>
      <li className="nav-item">
        <Link
          to={path}
          className="nav-link"
          onClick={() => menuDispatch({ type: CLOSE_SIDEBAR })}
        >
          {title}
        </Link>
      </li>
    </>
  );
}

export default CategoriesOption;
