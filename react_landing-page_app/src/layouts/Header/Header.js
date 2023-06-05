import React, { useState } from "react";
import { Link } from "react-router-dom";

// styles
import headerStyle from "./Header_Style.module.css";
// constants
import { headerContent } from "../../constants";
// Components
import { NavBar } from "../../components";

const Header = () => {
  return (
    <div className={headerStyle.container}>
      <Link className={headerStyle.title} to="">
        <img
          className={headerStyle.logo}
          alt={headerContent.logo.alt}
          src={headerContent.logo.src}
        />
        <h1>{headerContent.title}</h1>
      </Link>
      <NavBar />
    </div>
  );
};

export default Header;
