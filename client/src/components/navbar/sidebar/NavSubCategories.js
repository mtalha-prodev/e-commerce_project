import React from "react";
import { Link } from "react-router-dom";
import { BACK_MENU, BACK_CATEGORIES } from "../../../useReducer/actionType";
import CategoriesSubItem from "./sidebarItem/CategoriesSubItem";
import SubCategory from "./NavSubItem";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { categoriesData } from "./sidebarItem/categoriesData";

function Sidebar({ state, menuDispatch }) {
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
          {/* categories back arrow  */}
          {categorieProducts ? (
            <Link
              onClick={() => menuDispatch({ type: BACK_CATEGORIES })}
              className="nav-link"
            >
              <ArrowBackIcon className="back_icon" /> go back
            </Link>
          ) : (
            <Link
              onClick={() => menuDispatch({ type: BACK_MENU })}
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
                    onClick={() => menuDispatch({ type: item.type })}
                  >
                    {item.title}
                  </Link>
                  <span
                    className={item.iconClasses}
                    onClick={() => menuDispatch({ type: item.iconType })}
                  >
                    {item.icon}
                  </span>
                </li>
              );
            })
          ) : null
        ) : (
          <CategoriesSubItem state={state} menuDispatch={menuDispatch} />
        )}
        {/* caterories code end */}

        {state.home ? (
          <>
            <SubCategory
              title="FeatureD PRODUCTs SLIDER"
              menuDispatch={menuDispatch}
              path="/feature/products/slider"
            />
            <SubCategory
              title="Feature Categories"
              menuDispatch={menuDispatch}
              path="/feature/categories"
            />
            <SubCategory
              title="products collection showcase"
              menuDispatch={menuDispatch}
              path="/products/collection/showcase"
            />
          </>
        ) : null}
        {state.shopping ? (
          <>
            <SubCategory
              title="shop categories"
              menuDispatch={menuDispatch}
              path="/shop/categories"
            />
            <SubCategory
              title="single product"
              menuDispatch={menuDispatch}
              path="/single/product"
            />
            <SubCategory
              title="cart"
              menuDispatch={menuDispatch}
              path="/cary"
            />
            <SubCategory
              title="checkout"
              menuDispatch={menuDispatch}
              path="/checkout"
            />
          </>
        ) : null}

        {/* user login set to open login or user profile page dynamic */}
        {state.account ? (
          <>
            <SubCategory
              title="login / register"
              menuDispatch={menuDispatch}
              path="/login/register"
            />
            <SubCategory
              title="profile page"
              menuDispatch={menuDispatch}
              path="/profile"
            />
          </>
        ) : null}
        {state.pages ? (
          <>
            <SubCategory
              title="about us"
              menuDispatch={menuDispatch}
              path="/about"
            />
            <SubCategory
              title="services"
              menuDispatch={menuDispatch}
              path="/services"
            />
            <SubCategory
              title="contacts"
              menuDispatch={menuDispatch}
              path="/contacts"
            />
            <SubCategory
              title="documentation"
              menuDispatch={menuDispatch}
              path="/documentation"
            />
          </>
        ) : null}
      </ul>
    </>
  );
}

export default Sidebar;
