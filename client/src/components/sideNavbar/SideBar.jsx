import React, { useState, useEffect } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import "./sideBar.css";
import SideOption from "./SideOption";
import DropdownItems from "./dropdownItem/DropdownItems";

function SideBar() {
  const [sidebar, setSidebar] = useState(false);
  const [menShoes, setMenShoes] = useState(false);
  const [menClothes, setMenClothes] = useState(false);
  const [wemenShoes, setWemenShoes] = useState(false);
  const [wemenClothes, setWemenClothes] = useState(false);
  const [kids, setKids] = useState(false);
  const [bags, setBags] = useState(false);
  const [accessories, setAccessories] = useState(false);

  return (
    <>
      <div className="menu-Bar" onClick={() => setSidebar(!sidebar)}>
        <MenuIcon className="bar-icon" />
      </div>
      <div
        className={sidebar ? "menu-close active" : "menu-close"}
        onClick={() => setSidebar(!sidebar)}
      >
        <CloseIcon className="close-icon" />
      </div>
      <div
        className={sidebar ? "right-side-overlay-show" : null}
        onClick={() => {
          setSidebar(!sidebar);
        }}
      ></div>

      {/* set men product setup after click to show dropdown menu in left side check condition true to rander value this link cliked data*/}
      {menShoes ||
      menClothes ||
      wemenShoes ||
      wemenClothes ||
      kids ||
      bags ||
      accessories ? (
        <DropdownItems
          sidebar={sidebar}
          setSidebar={setSidebar}
          menShoes={menShoes}
          setMenShoes={setMenShoes}
          menClothes={menClothes}
          setMenClothes={setMenClothes}
          wemenShoes={wemenShoes}
          setWemenShoes={setWemenShoes}
          wemenClothes={wemenClothes}
          setWemenClothes={setWemenClothes}
          kids={kids}
          setKids={setKids}
          bags={bags}
          setBags={setBags}
          accessories={accessories}
          setAccessories={setAccessories}
        />
      ) : null}

      {/* side menu bar main category mega menu setup*/}
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav flex-column nav-menu-items">
          <div className="user-account">Login</div>
          <SideOption
            title="Men's Shoes"
            path="/menshoes"
            Icon={
              <ArrowRightIcon
                onClick={() => {
                  setMenShoes(!menShoes);
                  setSidebar(!sidebar);
                }}
              />
            }
          />
          <SideOption
            title="Men's Clothing"
            path="/menclothing"
            Icon={
              <ArrowRightIcon
                onClick={() => {
                  setMenClothes(!menClothes);
                  setSidebar(!sidebar);
                }}
              />
            }
          />
          <SideOption
            title="woMen's Shoes"
            path="/womenshoes"
            Icon={
              <ArrowRightIcon
                onClick={() => {
                  setWemenShoes(!wemenShoes);
                  setSidebar(!sidebar);
                }}
              />
            }
          />
          <SideOption
            title="WOMen's Clothing"
            path="/womenclothing"
            Icon={
              <ArrowRightIcon
                onClick={() => {
                  setWemenClothes(!wemenClothes);
                  setSidebar(!sidebar);
                }}
              />
            }
          />
          <SideOption
            title="kid's Clothing"
            path="/kidclothing"
            Icon={
              <ArrowRightIcon
                onClick={() => {
                  setKids(!kids);
                  setSidebar(!sidebar);
                }}
              />
            }
          />
          <SideOption
            title="Bags"
            path="/bags"
            Icon={
              <ArrowRightIcon
                onClick={() => {
                  setBags(!bags);
                  setSidebar(!sidebar);
                }}
              />
            }
          />
          <SideOption
            title="accessories"
            path="/accessories"
            Icon={
              <ArrowRightIcon
                onClick={() => {
                  setAccessories(!accessories);
                  setSidebar(!sidebar);
                }}
              />
            }
          />
        </ul>
      </nav>
    </>
  );
}

export default SideBar;
