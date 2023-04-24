import React from "react";
import { ListComponent } from "../../components";
// style
import footerStyle from "./Footer_Style.module.css";
import {
  LegalFooterContainer,
  MainFooterContainer,
  SocialFooterContainer,
  SocialIcon,
} from "./Style";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className={footerStyle.container}>
      <MainFooter />
      <SocialFooter />
      <LegalFooter />
    </section>
  );
};

export default Footer;

const MainFooter = () => {
  return (
    <MainFooterContainer>
      <ListComponent title={"head"} />
      <ListComponent title={"head-2"} />
    </MainFooterContainer>
  );
};

const SocialFooter = () => {
  return (
    <SocialFooterContainer>
      <SocialIcon></SocialIcon>
      <SocialIcon></SocialIcon>
      <SocialIcon></SocialIcon>
      <SocialIcon></SocialIcon>
      <SocialIcon></SocialIcon>
    </SocialFooterContainer>
  );
};
const LegalFooter = () => {
  return (
    <LegalFooterContainer>
      <div style={{ display: "flex", gap: "10px" }}>
        <Link>Terms &amp; Conditions</Link>
        <Link>Privacy Policy</Link>
      </div>
      <Link>&copy; 2019 Copyright Nowrap Inc.</Link>
    </LegalFooterContainer>
  );
};
