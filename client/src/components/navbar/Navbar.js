import React, { useReducer } from "react";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import { Link } from "react-router-dom";
import { reducer, initialState } from "../../useReducer/reducer";
import "./navbar.css";
import NavSubCategories from "./sidebar/NavSubCategories";
import { NavData } from "./NavData";
import { CLOSE_SIDEBAR, TRIGER } from "../../useReducer/actionType";
import eShop from "../../images/eshop.png";
import Badge from "@material-ui/core/Badge";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import CartItem from "./cartDrowpdown/CartItem";

function Navbar() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // any one categories is true show categories part
  const navSubCategory =
    state.categories ||
    state.home ||
    state.shopping ||
    state.pages ||
    state.account;

  return (
    <>
      <nav className="navbar  navbar-expand-lg ">
        {/* menu bar humberger */}
        <div className="triger" onClick={() => dispatch({ type: TRIGER })}>
          <MenuRoundedIcon className="triger-icon" />
        </div>
        {/* when open sidebar to set overly complete body  */}
        <div
          className={!state.menu ? "overlay_body" : "overlay_body show"}
          onClick={() => dispatch({ type: CLOSE_SIDEBAR })}
        ></div>
        {/* sidebar menu start  */}
        <div className={!state.menu ? "sidebar_menu" : "sidebar_menu active"}>
          {/* close sidebar using close icon && layout blur  start */}
          <div
            className="close"
            onClick={() => dispatch({ type: CLOSE_SIDEBAR })}
          >
            <CloseRoundedIcon className=" close_icon" />
          </div>

          {/* close sidebar using close icon && layout blur end  */}
          {/* user account start  */}
          <div className="user_account">Hi, Sign In</div>

          {/* if any one condition is true to go next part */}
          {navSubCategory ? (
            <NavSubCategories state={state} dispatch={dispatch} />
          ) : null}

          {/* sidebar menu link setup */}
          {!navSubCategory ? (
            <ul className="show  navbar-nav flex-column">
              {NavData.map((item, index) => {
                return (
                  <li key={index} className={item.liClasses}>
                    <Link
                      to={item.path}
                      className={item.linkClasses}
                      onClick={() => dispatch({ type: item.type })}
                    >
                      {item.title}
                    </Link>
                    <span
                      className={item.iconClasses}
                      onClick={() => dispatch({ type: item.iconType })}
                    >
                      {item.icon}
                    </span>
                  </li>
                );
              })}
            </ul>
          ) : null}
        </div>
        {/* sidebar menu end  */}
        {/* MAIN NAVBAR START */}
        <Link to="/" className="navbar-brand">
          <img src={eShop} alt="logo" className=" w-100 " />
          <span>eShop</span>
        </Link>
        <ul className="navbar-nav m-auto">
          {/* MAIN NAVBAR END */}
          <h1>hi</h1>
        </ul>
        <div className="cart">
          <Badge
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            badgeContent={3}
            className="badge-icon"
          >
            <ShoppingCartOutlinedIcon className="cart-icon" />
          </Badge>
          <CartItem />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
