import React, { useReducer } from "react";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import { Link, NavLink } from "react-router-dom";
import { initialState } from "../../useReducer/initialState";
import { reducer } from "../../useReducer/reducer";
import "./navbar.css";
import Sidebar from "./sidebar/Sidebar";

function Navbar() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state.menu, state);
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="triger" onClick={() => dispatch({ type: "HUMBERGER" })}>
          <MenuRoundedIcon className="triger-icon" />
        </div>
        <div
          className={!state.menu ? "overlay_body" : "overlay_body show"}
          onClick={() => dispatch({ type: "CLOSE" })}
        ></div>
        {/* sidebar menu start  */}
        <div className={!state.menu ? "sidebar_menu" : "sidebar_menu active"}>
          {/* close sidebar using close icon && layout blur  start */}
          <div className="close" onClick={() => dispatch({ type: "CLOSE" })}>
            <CloseRoundedIcon className=" close_icon" />
          </div>

          {/* close sidebar using close icon && layout blur end  */}
          {/* user account start  */}
          <div className="user_account">Hi, Sign In</div>
          {/* sidebar menu link setup */}
          <div className="nav_menu">
            <Sidebar />
          </div>
        </div>
        {/* sidebar menu end  */}

        <NavLink to="/" className="navbar-brand">
          Navbar
        </NavLink>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink to="/service" className="nav-link">
                service
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
