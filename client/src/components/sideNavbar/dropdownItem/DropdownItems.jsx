import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import "../sideBar.css";
import CloseIcon from "@material-ui/icons/Close";
import {
  Accessories,
  Bags,
  Kids,
  Menclothing,
  Menshoes,
  Wemenshoes,
  Wemenclothing,
} from "./dropdowOption/productsData";
import { Link } from "react-router-dom";

function SidebarTwo(props) {
  //  pass props to get as same name using
  const {
    sidebar,
    setSidebar,
    menShoes,
    setMenShoes,
    menClothes,
    setMenClothes,
    wemenShoes,
    setWemenShoes,
    wemenClothes,
    setWemenClothes,
    kids,
    setKids,
    bags,
    setBags,
    accessories,
    setAccessories,
  } = props;

  const checkStatus =
    menShoes ||
    menClothes ||
    wemenShoes ||
    wemenClothes ||
    kids ||
    bags ||
    accessories;

  const closeHandler = () => {
    if (menShoes) {
      setMenShoes(!menShoes);
    } else if (menClothes) {
      setMenClothes(!menClothes);
    } else if (wemenShoes) {
      setWemenShoes(!wemenShoes);
    } else if (wemenClothes) {
      setWemenClothes(!wemenClothes);
    } else if (kids) {
      setKids(!kids);
    } else if (bags) {
      setBags(!bags);
    } else {
      setAccessories(!accessories);
    }
  };
  const gobackHandler = () => {
    if (menShoes) {
      setMenShoes(!menShoes);
    } else if (menClothes) {
      setMenClothes(!menClothes);
    } else if (wemenShoes) {
      setWemenShoes(!wemenShoes);
    } else if (wemenClothes) {
      setWemenClothes(!wemenClothes);
    } else if (kids) {
      setKids(!kids);
    } else if (bags) {
      setBags(!bags);
    } else {
      setAccessories(!accessories);
    }
    setSidebar(!sidebar);
  };

  return (
    <>
      <div
        className={checkStatus ? "menu-close active" : "menu-close"}
        onClick={closeHandler}
      >
        <CloseIcon className="close-icon" />
      </div>
      <div
        className={checkStatus ? "right-side-overlay-show" : null}
        onClick={closeHandler}
      ></div>
      <nav
        className={checkStatus ? "nav-menu nav-two active" : "nav-two nav-menu"}
      >
        <ul className="nav pt-5 flex-column nav-menu-items">
          <li className="nav-item back-arrow" onClick={gobackHandler}>
            <ArrowBackIcon className="back-icon" />
            GoBack
          </li>
          {/* map fun using to dropdownitem randering */}
          {menShoes
            ? Menshoes.map((item, index) => {
                return (
                  <li key={index} className={item.liClasses}>
                    <Link to={item.path} className={item.aClasses}>
                      {item.title}
                    </Link>
                  </li>
                );
              })
            : null}
          {menClothes
            ? Menclothing.map((item, index) => {
                return (
                  <li key={index} className={item.liClasses}>
                    <Link to={item.path} className={item.aClasses}>
                      {item.title}
                    </Link>
                  </li>
                );
              })
            : null}
          {wemenShoes
            ? Wemenshoes.map((item, index) => {
                return (
                  <li key={index} className={item.liClasses}>
                    <Link to={item.path} className={item.aClasses}>
                      {item.title}
                    </Link>
                  </li>
                );
              })
            : null}
          {wemenClothes
            ? Wemenclothing.map((item, index) => {
                return (
                  <li key={index} className={item.liClasses}>
                    <Link to={item.path} className={item.aClasses}>
                      {item.title}
                    </Link>
                  </li>
                );
              })
            : null}
          {kids
            ? Kids.map((item, index) => {
                return (
                  <li key={index} className={item.liClasses}>
                    <Link to={item.path} className={item.aClasses}>
                      {item.title}
                    </Link>
                  </li>
                );
              })
            : null}
          {bags
            ? Bags.map((item, index) => {
                return (
                  <li key={index} className={item.liClasses}>
                    <Link to={item.path} className={item.aClasses}>
                      {item.title}
                    </Link>
                  </li>
                );
              })
            : null}
          {accessories
            ? Accessories.map((item, index) => {
                return (
                  <li key={index} className={item.liClasses}>
                    <Link to={item.path} className={item.aClasses}>
                      {item.title}
                    </Link>
                  </li>
                );
              })
            : null}
        </ul>
      </nav>
    </>
  );
}

export default SidebarTwo;
