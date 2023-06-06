import React from "react";

import styled from "styled-components";

// style
import LandingPageStyle from "./LandingPage_Style.module.css";

import { Contact, HeroSlider } from "../utils";
import PageContainer from "./PageStyle";

// assets
import h_img from "../assets/heroImage.jpg";

const LandingPage = () => {
  return (
    <>
      <div className={LandingPageStyle.heroSec}>
        <div className={LandingPageStyle.content}>
          <p>
            <h1 className={LandingPageStyle.headline}>Hero Section</h1>
            <caption>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatum, cm.
            </caption>
          </p>
          <button>Let’s get started!</button>
        </div>
        <div className={LandingPageStyle.heroimg}>
          <img
            className={LandingPageStyle.image}
            src={h_img}
            alt="hero_image"
          />
        </div>
      </div>
      <PageContainer className={LandingPageStyle.sliderSec}>
        <HeroSlider />
      </PageContainer>
    </>
  );
};

export default LandingPage;
