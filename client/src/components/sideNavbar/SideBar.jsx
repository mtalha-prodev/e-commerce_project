import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import "./sideBar.css";
import SideOption from "./SideOption";

function SideBar() {
  const [sidebar, setSidebar] = useState(false);

  const next = () => {
    console.log("next is working");
  };

  return (
    <>
      <div className="sideNav">
        <Link to="#" className="menu-Bar" onClick={() => setSidebar(!sidebar)}>
          <FaIcons.FaBars />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav flex-column nav-menu-items">
          <div className="user-account">Login</div>
          <div className="link-option">
            <SideOption
              title="Men's Shoes"
              path="/menshoes"
              Icon={<AiIcons.AiFillCaretRight onClick={next} />}
            />
            <SideOption
              title="Men's Clothing"
              path="/menclothing"
              Icon={<AiIcons.AiFillCaretRight onClick={next} />}
            />
            <SideOption
              title="woMen's Shoes"
              path="/womenshoes"
              Icon={<AiIcons.AiFillCaretRight onClick={next} />}
            />
            <SideOption
              title="WOMen's Clothing"
              path="/womenclothing"
              Icon={<AiIcons.AiFillCaretRight onClick={next} />}
            />
            <SideOption
              title="kid's Clothing"
              path="/kidclothing"
              Icon={<AiIcons.AiFillCaretRight onClick={next} />}
            />
            <SideOption
              title="Bags"
              path="/bags"
              Icon={<AiIcons.AiFillCaretRight onClick={next} />}
            />
            <SideOption
              title="accessories"
              path="/accessories"
              Icon={<AiIcons.AiFillCaretRight onClick={next} />}
            />

            <p>{}</p>
          </div>
        </ul>
      </nav>
    </>
  );
}

export default SideBar;
