import React, { useState } from "react";
import { Link } from "react-router-dom";

// styles
import headerStyle from "./Header_Style.module.css";
// constants
import { headerContent } from "../../constants";
// Components
import { NavBar } from "../../components";

// Icons
import { SiTailwindcss } from "react-icons/si";

const Header = () => {
  return (
    <div className={headerStyle.container}>
      <Link className={headerStyle.title} to="">
        {/* <img
          className={headerStyle.logo}
          alt={headerContent.logo.alt}
          src={headerContent.logo.src}
        /> */}
        <SiTailwindcss className="text-primary sm:text-[25px] text-[20px]" />
        <h1>{headerContent.title}</h1>
      </Link>
      <NavBar />
    </div>
  );
};

export default Header;
