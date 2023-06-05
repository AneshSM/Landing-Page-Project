import React from "react";

// style
import LandingPageStyle from "./LandingPage_Style.module.css";
import styled from "styled-components";
import { Contact, HeroSlider } from "../utils";
import PageContainer from "./PageStyle";

const LandingPage = () => {
  return (
    <>
      <div className={LandingPageStyle.heroSec}>
        <Headline>Hero Section</Headline>

        <StartBtton>Let’s get started!</StartBtton>
      </div>
      <PageContainer className={LandingPageStyle.sliderSec}>
        <HeroSlider />
      </PageContainer>
      <div className={LandingPageStyle.contact}>
        <Contact />
      </div>
    </>
  );
};

export default LandingPage;

const Headline = styled.h1`
  font-size: 10rem;
  color: #40291c;
  opacity: 0.8;
`;

const StartBtton = styled.button`
  background: none;
  border: none;
  background-color: #eee5d4;
  color: #7e7383;
  padding: 10px;
  border-radius: 10px;
  font-size: x-large;
`;
