import React from "react";
import { Link } from "react-router-dom";
import { CLOSE_SIDEBAR } from "../../../useReducer/actionType";

function SubCategory({ title, path, dispatch }) {
  return (
    <>
      <li className="nav-item">
        <Link
          to={path}
          onClick={() => dispatch({ type: CLOSE_SIDEBAR })}
          className="nav-link"
        >
          {title}
        </Link>
      </li>
    </>
  );
}

export default SubCategory;
