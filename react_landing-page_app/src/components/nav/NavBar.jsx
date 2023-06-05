import React, { useState } from "react";
import { Link } from "react-router-dom";

// Icons
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

// Styles
import navbarStyle from "./NavBar_Style.module.css";
// Constants
import { headerContent } from "../../constants";
// Components
import { Auth } from "../../components/auth";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={navbarStyle.navBar}>
      <div className={navbarStyle.nav}>
        {headerContent.nav.map((value, index) => (
          <Link
            key={index}
            className={`${
              index === headerContent.nav.length - 1 ? "mr-0" : "mr-10"
            }`}
            to={value.to}
            style={{ textDecoration: "none", color: "#eee5d4" }}
          >
            {value.name}
          </Link>
        ))}
      </div>

      <div className={`${navbarStyle.menu}`}>
        {toggle ? (
          <IoCloseSharp
            onClick={() => setToggle((prev) => !prev)}
            className={`${toggle ? "z-50" : "z-0"}`}
          />
        ) : (
          <GiHamburgerMenu onClick={() => setToggle((prev) => !prev)} />
        )}
        <div
          className={`${toggle ? "right-[0px]" : "-right-[50vh]"} ${
            navbarStyle.sidebar
          } `}
        >
          {headerContent.nav.map((value, index) => (
            <Link
              key={index}
              className={`${
                index === headerContent.nav.length - 1 ? "mb-0" : "mb-6"
              } w-full flex  justify-center`}
              to={value.to}
              style={{ textDecoration: "none", color: "#eee5d4" }}
            >
              {value.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
