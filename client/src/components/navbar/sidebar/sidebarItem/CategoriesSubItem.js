import React from "react";

import CategoriesOption from "./CategoriesOption";

function SidebarItem({ state, dispatch }) {
  return (
    <>
      {state.menshoes ? (
        <>
          <CategoriesOption
            title="sneakers"
            path="/men's/shoes/sneakers"
            dispatch={dispatch}
          />
          <CategoriesOption
            title="loafers"
            path="/men's/shoes/loafers"
            dispatch={dispatch}
          />
          <CategoriesOption
            title="boat shoes"
            path="/men's/shoes/boat"
            dispatch={dispatch}
          />
          <CategoriesOption
            title="sandals"
            path="/men's/shoes/sandals"
            dispatch={dispatch}
          />
          <CategoriesOption
            title="view all"
            path="/men's/shoes/view"
            dispatch={dispatch}
          />
        </>
      ) : null}

      {/* mens clothing  */}
      {state.menclothing ? (
        <>
          <CategoriesOption
            title="SHIRTS & TOPS"
            path="/men's/clothing/shirts"
            dispatch={dispatch}
          />
          <CategoriesOption
            title="pants"
            path="/men's/clothing/pants"
            dispatch={dispatch}
          />
          <CategoriesOption
            title="jackets"
            path="/men's/clothing/jackets"
            dispatch={dispatch}
          />
          <CategoriesOption
            title="view all"
            path="/men's/clothing/view"
            dispatch={dispatch}
          />
        </>
      ) : null}
      {state.womenshoes ? (
        <>
          <CategoriesOption
            title="sneakers"
            path="/women's/shoes/sneakers"
            dispatch={dispatch}
          />
          <CategoriesOption
            title="flats"
            path="/women's/shoes/flats"
            dispatch={dispatch}
          />
          <CategoriesOption
            title="heels"
            path="/women's/shoes/heels"
            dispatch={dispatch}
          />
          <CategoriesOption
            title="sandals"
            path="/women's/shoes/sandals"
            dispatch={dispatch}
          />
          <CategoriesOption
            title="view all"
            path="/women's/shoes/view"
            dispatch={dispatch}
          />
        </>
      ) : null}

      {state.womenclothing ? (
        <>
          <CategoriesOption
            title="Dresses"
            path="/women's/clothing/shirts"
            dispatch={dispatch}
          />
          <CategoriesOption
            title="shorts"
            path="/women's/clothing/shorts"
            dispatch={dispatch}
          />
          <CategoriesOption
            title="swimwear"
            path="/women's/clothing/swimwear"
            dispatch={dispatch}
          />
          <CategoriesOption
            title="view all"
            path="/women's/clothing/view"
            dispatch={dispatch}
          />
        </>
      ) : null}

      {state.kids ? (
        <>
          <CategoriesOption
            title="Kids clothing"
            path="/kids/clothing"
            dispatch={dispatch}
          />
          <CategoriesOption
            title="kids shoes"
            path="/kids/shoes"
            dispatch={dispatch}
          />
        </>
      ) : null}
      {state.bags ? (
        <>
          <CategoriesOption
            title="handbags"
            path="/bags/handbags"
            dispatch={dispatch}
          />
          <CategoriesOption
            title="backpacks"
            path="/backpacks"
            dispatch={dispatch}
          />
          <CategoriesOption
            title="luggage"
            path="/wallets"
            dispatch={dispatch}
          />
          <CategoriesOption
            title="view all"
            path="/bags/view"
            dispatch={dispatch}
          />
        </>
      ) : null}
      {state.accessories ? (
        <>
          <CategoriesOption
            title="sunglasses"
            path="/accessories/sunglasses"
            dispatch={dispatch}
          />
          <CategoriesOption
            title="hats"
            path="/accessories/hats"
            dispatch={dispatch}
          />
          <CategoriesOption
            title="watches"
            path="/accessories/watches"
            dispatch={dispatch}
          />
          <CategoriesOption
            title="jewelry"
            path="/accessories/jewelry"
            dispatch={dispatch}
          />
          <CategoriesOption
            title="belts"
            path="/accessories/belts"
            dispatch={dispatch}
          />
          <CategoriesOption
            title="view all"
            path="/accessories/view"
            dispatch={dispatch}
          />
        </>
      ) : null}
    </>
  );
}

export default SidebarItem;
