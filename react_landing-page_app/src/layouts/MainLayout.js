import React from "react";

// installed
import { Outlet } from "react-router-dom";

// custom
import { Header } from "./Header";
import { Footer } from "./Footer";
// Style
import { MainContent, MainLayoutContainer } from "./Style";
import SideBar from "./SideBar/SideBar";

const MainLayout = () => {
  return (
    <MainLayoutContainer>
      <MainContent>
        <Header />
        <Outlet />
        <Footer />
      </MainContent>
    </MainLayoutContainer>
  );
};

export default MainLayout;
