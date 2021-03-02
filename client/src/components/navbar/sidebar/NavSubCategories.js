import React from "react";
import { Link } from "react-router-dom";
import { BACK_MENU, BACK_CATEGORIES } from "../../../useReducer/actionType";
import CategoriesSubItem from "./sidebarItem/CategoriesSubItem";
import SubCategory from "./NavSubItem";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { categoriesData } from "./sidebarItem/categoriesData";

function Sidebar({ state, dispatch }) {
  // defined categories action type
  const categorieProducts =
    state.menshoes ||
    state.menclothing ||
    state.womenshoes ||
    state.womenclothing ||
    state.kids ||
    state.bags ||
    state.accessories;

  return (
    <>
      <ul className="navbar-nav flex-column">
        <li className="nav-item">
          {categorieProducts ? (
            <Link
              onClick={() => dispatch({ type: BACK_CATEGORIES })}
              className="nav-link"
            >
              <ArrowBackIcon className="back_icon" />
            </Link>
          ) : (
            <Link
              onClick={() => dispatch({ type: BACK_MENU })}
              className="nav-link"
            >
              <ArrowBackIcon className="back_icon" /> GO BACK
            </Link>
          )}
        </li>
        {/* set categories mega menu in side    */}
        {!categorieProducts ? (
          state.categories ? (
            categoriesData.map((item, index) => {
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
            })
          ) : null
        ) : (
          <CategoriesSubItem state={state} dispatch={dispatch} />
        )}
        {/* caterories code end */}

        {state.home ? (
          <>
            <SubCategory
              title="FeatureD PRODUCTs SLIDER"
              dispatch={dispatch}
              path="/feature/products/slider"
            />
            <SubCategory
              title="Feature Categories"
              dispatch={dispatch}
              path="/feature/categories"
            />
            <SubCategory
              title="products collection showcase"
              dispatch={dispatch}
              path="/products/collection/showcase"
            />
          </>
        ) : null}
        {state.shopping ? (
          <>
            <SubCategory
              title="shop categories"
              dispatch={dispatch}
              path="/shop/categories"
            />
            <SubCategory
              title="single product"
              dispatch={dispatch}
              path="/single/product"
            />
            <SubCategory title="cart" dispatch={dispatch} path="/cary" />
            <SubCategory
              title="checkout"
              dispatch={dispatch}
              path="/checkout"
            />
          </>
        ) : null}

        {/* user login set to open login or user profile page dynamic */}
        {state.account ? (
          <>
            <SubCategory
              title="login / register"
              dispatch={dispatch}
              path="/login/register"
            />
            <SubCategory
              title="profile page"
              dispatch={dispatch}
              path="/profile"
            />
          </>
        ) : null}
        {state.pages ? (
          <>
            <SubCategory title="about us" dispatch={dispatch} path="/about" />
            <SubCategory
              title="services"
              dispatch={dispatch}
              path="/services"
            />
            <SubCategory
              title="contacts"
              dispatch={dispatch}
              path="/contacts"
            />
            <SubCategory
              title="documentation"
              dispatch={dispatch}
              path="/documentation"
            />
          </>
        ) : null}
      </ul>
    </>
  );
}

export default Sidebar;
