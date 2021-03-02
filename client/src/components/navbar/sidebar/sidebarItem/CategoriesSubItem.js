import React from "react";

import CategoriesOption from "./CategoriesOption";

function SidebarItem({ state, dispatch }) {
  return (
    <>
      {state.menshoes ? (
        <>
          <CategoriesOption
            title="sneakers"
            path="/men's/shoes"
            dispatch={dispatch}
          />
          <CategoriesOption
            title="loafers"
            path="/men's/shoes"
            dispatch={dispatch}
          />
          <CategoriesOption
            title="boat shoes"
            path="/men's/shoes"
            dispatch={dispatch}
          />
          <CategoriesOption
            title="sandals"
            path="/men's/shoes"
            dispatch={dispatch}
          />
          <CategoriesOption
            title="view all"
            path="/men's/shoes"
            dispatch={dispatch}
          />
        </>
      ) : null}

      {/* mens clothing  */}
      {state.menclothing ? (
        <>
          <CategoriesOption
            title="sneakers"
            path="/men's/clothing"
            dispatch={dispatch}
          />
          <CategoriesOption
            title="loafers"
            path="/men's/clothing"
            dispatch={dispatch}
          />
          <CategoriesOption
            title="boat clothing"
            path="/men's/clothing"
            dispatch={dispatch}
          />
          <CategoriesOption
            title="sandals"
            path="/men's/clothing"
            dispatch={dispatch}
          />
          <CategoriesOption
            title="view all"
            path="/men's/clothing"
            dispatch={dispatch}
          />
        </>
      ) : null}
      {state.womenshoes ? (
        <>
          <CategoriesOption
            title="sneakers"
            path="/women's/shoes"
            dispatch={dispatch}
          />
          <CategoriesOption
            title="loafers"
            path="/women's/shoes"
            dispatch={dispatch}
          />
          <CategoriesOption
            title="boat shoes"
            path="/women's/shoes"
            dispatch={dispatch}
          />
          <CategoriesOption
            title="sandals"
            path="/women's/shoes"
            dispatch={dispatch}
          />
          <CategoriesOption
            title="view all"
            path="/women's/shoes"
            dispatch={dispatch}
          />
        </>
      ) : null}

      {state.womenclothing ? (
        <>
          <CategoriesOption
            title="sneakers"
            path="/women's/clothing"
            dispatch={dispatch}
          />
          <CategoriesOption
            title="loafers"
            path="/women's/clothing"
            dispatch={dispatch}
          />
          <CategoriesOption
            title="boat clothing"
            path="/women's/clothing"
            dispatch={dispatch}
          />
          <CategoriesOption
            title="sandals"
            path="/women's/clothing"
            dispatch={dispatch}
          />
          <CategoriesOption
            title="view all"
            path="/women's/clothing"
            dispatch={dispatch}
          />
        </>
      ) : null}

      {state.kids ? (
        <>
          <CategoriesOption
            title="sneakers"
            path="/men's/clothing"
            dispatch={dispatch}
          />
          <CategoriesOption
            title="loafers"
            path="/men's/shoes"
            dispatch={dispatch}
          />
          <CategoriesOption
            title="boat shoes"
            path="/men's/shoes"
            dispatch={dispatch}
          />
          <CategoriesOption
            title="sandals"
            path="/men's/shoes"
            dispatch={dispatch}
          />
          <CategoriesOption
            title="view all"
            path="/men's/shoes"
            dispatch={dispatch}
          />
        </>
      ) : null}
      {state.bags ? (
        <>
          <CategoriesOption
            title="sneakers"
            path="/men's/shoes"
            dispatch={dispatch}
          />
          <CategoriesOption
            title="loafers"
            path="/men's/shoes"
            dispatch={dispatch}
          />
          <CategoriesOption
            title="boat shoes"
            path="/men's/shoes"
            dispatch={dispatch}
          />
          <CategoriesOption
            title="sandals"
            path="/men's/shoes"
            dispatch={dispatch}
          />
          <CategoriesOption
            title="view all"
            path="/men's/shoes"
            dispatch={dispatch}
          />
        </>
      ) : null}
      {state.accessories ? (
        <>
          <CategoriesOption
            title="sneakers"
            path="/men's/shoes"
            dispatch={dispatch}
          />
          <CategoriesOption
            title="loafers"
            path="/men's/shoes"
            dispatch={dispatch}
          />
          <CategoriesOption
            title="boat shoes"
            path="/men's/shoes"
            dispatch={dispatch}
          />
          <CategoriesOption
            title="sandals"
            path="/men's/shoes"
            dispatch={dispatch}
          />
          <CategoriesOption
            title="view all"
            path="/men's/shoes"
            dispatch={dispatch}
          />
        </>
      ) : null}
    </>
  );
}

export default SidebarItem;
