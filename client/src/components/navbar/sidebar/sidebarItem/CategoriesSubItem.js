import React from "react";

import CategoriesOption from "./CategoriesOption";

function SidebarItem({ state, menuDispatch }) {
  return (
    <>
      {state.menshoes ? (
        <>
          <CategoriesOption
            title="sneakers"
            path="/men's/shoes/sneakers"
            menuDispatch={menuDispatch}
          />
          <CategoriesOption
            title="loafers"
            path="/men's/shoes/loafers"
            menuDispatch={menuDispatch}
          />
          <CategoriesOption
            title="boat shoes"
            path="/men's/shoes/boat"
            menuDispatch={menuDispatch}
          />
          <CategoriesOption
            title="sandals"
            path="/men's/shoes/sandals"
            menuDispatch={menuDispatch}
          />
          <CategoriesOption
            title="view all"
            path="/men's/shoes/view"
            menuDispatch={menuDispatch}
          />
        </>
      ) : null}

      {/* mens clothing  */}
      {state.menclothing ? (
        <>
          <CategoriesOption
            title="SHIRTS & TOPS"
            path="/men's/clothing/shirts"
            menuDispatch={menuDispatch}
          />
          <CategoriesOption
            title="pants"
            path="/men's/clothing/pants"
            menuDispatch={menuDispatch}
          />
          <CategoriesOption
            title="jackets"
            path="/men's/clothing/jackets"
            menuDispatch={menuDispatch}
          />
          <CategoriesOption
            title="view all"
            path="/men's/clothing/view"
            menuDispatch={menuDispatch}
          />
        </>
      ) : null}
      {state.womenshoes ? (
        <>
          <CategoriesOption
            title="sneakers"
            path="/women's/shoes/sneakers"
            menuDispatch={menuDispatch}
          />
          <CategoriesOption
            title="flats"
            path="/women's/shoes/flats"
            menuDispatch={menuDispatch}
          />
          <CategoriesOption
            title="heels"
            path="/women's/shoes/heels"
            menuDispatch={menuDispatch}
          />
          <CategoriesOption
            title="sandals"
            path="/women's/shoes/sandals"
            menuDispatch={menuDispatch}
          />
          <CategoriesOption
            title="view all"
            path="/women's/shoes/view"
            menuDispatch={menuDispatch}
          />
        </>
      ) : null}

      {state.womenclothing ? (
        <>
          <CategoriesOption
            title="Dresses"
            path="/women's/clothing/shirts"
            menuDispatch={menuDispatch}
          />
          <CategoriesOption
            title="shorts"
            path="/women's/clothing/shorts"
            menuDispatch={menuDispatch}
          />
          <CategoriesOption
            title="swimwear"
            path="/women's/clothing/swimwear"
            menuDispatch={menuDispatch}
          />
          <CategoriesOption
            title="view all"
            path="/women's/clothing/view"
            menuDispatch={menuDispatch}
          />
        </>
      ) : null}

      {state.kids ? (
        <>
          <CategoriesOption
            title="Kids clothing"
            path="/kids/clothing"
            menuDispatch={menuDispatch}
          />
          <CategoriesOption
            title="kids shoes"
            path="/kids/shoes"
            menuDispatch={menuDispatch}
          />
        </>
      ) : null}
      {state.bags ? (
        <>
          <CategoriesOption
            title="handbags"
            path="/bags/handbags"
            menuDispatch={menuDispatch}
          />
          <CategoriesOption
            title="backpacks"
            path="/backpacks"
            menuDispatch={menuDispatch}
          />
          <CategoriesOption
            title="luggage"
            path="/wallets"
            menuDispatch={menuDispatch}
          />
          <CategoriesOption
            title="view all"
            path="/bags/view"
            menuDispatch={menuDispatch}
          />
        </>
      ) : null}
      {state.accessories ? (
        <>
          <CategoriesOption
            title="sunglasses"
            path="/accessories/sunglasses"
            menuDispatch={menuDispatch}
          />
          <CategoriesOption
            title="hats"
            path="/accessories/hats"
            menuDispatch={menuDispatch}
          />
          <CategoriesOption
            title="watches"
            path="/accessories/watches"
            menuDispatch={menuDispatch}
          />
          <CategoriesOption
            title="jewelry"
            path="/accessories/jewelry"
            menuDispatch={menuDispatch}
          />
          <CategoriesOption
            title="belts"
            path="/accessories/belts"
            menuDispatch={menuDispatch}
          />
          <CategoriesOption
            title="view all"
            path="/accessories/view"
            menuDispatch={menuDispatch}
          />
        </>
      ) : null}
    </>
  );
}

export default SidebarItem;
