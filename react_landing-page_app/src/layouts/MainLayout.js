import React from "react";

// installed
import { Outlet } from "react-router-dom";

// custom
import { Header } from "./Header";
import { Footer } from "./Footer";
// Style
import { MainLayoutContainer } from "./Style";

const MainLayout = () => {
  return (
    <MainLayoutContainer>
      <Outlet />
      <Footer />
    </MainLayoutContainer>
  );
};

export default MainLayout;
