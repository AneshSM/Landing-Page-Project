import React from "react";

// installed
import { Outlet } from "react-router-dom";

// custom
// Style
import MainLayoutStyle from "./MainLayout_Style.module.css";
import { Header } from "../Header";

const MainLayout = () => {
  return (
    <div className={MainLayoutStyle.section}>
      <Header />
      {/* <MainContent>
        <Outlet />
      </MainContent> */}
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
