import React, { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
// style
import sideBarStyle from "./SideBar_Style.module.css";
import styled from "styled-components";

const SideBar = () => {
  const [openClose, setOpenClose] = useState(false);
  const handleSidebar = () => {
    setOpenClose(!openClose);
    console.log(openClose);
    console.log(SideBarwidth);
  };
  let SideBarwidth = `${sideBarStyle.container}  ${
    openClose ? sideBarStyle.close : sideBarStyle.open
  }`;
  return (
    <div className={SideBarwidth}>
      <Header>
        {openClose ? "" : <div>Side Bar</div>}
        <button className={sideBarStyle.burger_menu} onClick={handleSidebar}>
          {openClose ? <GiHamburgerMenu /> : <IoCloseSharp />}
        </button>
      </Header>
    </div>
  );
};

export default SideBar;

const Header = styled.h1`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px;
`;
