import React from "react";

// installed
import { Outlet } from "react-router-dom";

// Style
import MainLayoutStyle from "./MainLayout_Style.module.css";

// Layouts
import { Footer, Header } from "../../layouts";

const MainLayout = () => {
  return (
    <div className={MainLayoutStyle.section}>
      <Header />
      <section className={MainLayoutStyle.main}>
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};

export default MainLayout;
