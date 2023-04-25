import React from "react";
import { Link } from "react-router-dom";
// custom
import { ListComponent } from "../../components";
import { NewsletterSignup } from "../../utils";

// icons
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";

// style
import footerStyle from "./Footer_Style.module.css";

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
  const Contents = [
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
    "  Lorem ipsum dolor elit. ",
    "  Lorem ipsum    ",
    "   Lorem ipsum dolor sit amet.",
    "  Lorem ipsum ",
    "  Lorem ipsum dolor sit.    ",
  ];
  return (
    <div className={footerStyle.main_container}>
      <ListComponent title={"About"} />
      <ListComponent title={"Contents"} items={Contents} />
      <ListComponent title={"Contact"} />
      <NewsletterSignup />
    </div>
  );
};

const SocialFooter = () => {
  return (
    <div className={footerStyle.social_container}>
      <div className={footerStyle.icon_container}>
        <Link style={{ textDecoration: "none", color: "#ffbf9a" }}>
          <AiFillInstagram />
        </Link>
      </div>
      <div className={footerStyle.icon_container}>
        <Link style={{ textDecoration: "none", color: "#ffbf9a" }}>
          <AiFillTwitterCircle />
        </Link>
      </div>
      <div className={footerStyle.icon_container}>
        <Link style={{ textDecoration: "none", color: "#ffbf9a" }}>
          <AiFillFacebook />
        </Link>
      </div>
      <div className={footerStyle.icon_container}>
        <Link style={{ textDecoration: "none", color: "#ffbf9a" }}>
          <AiFillLinkedin />
        </Link>
      </div>
      <div className={footerStyle.icon_container}></div>
    </div>
  );
};
const LegalFooter = () => {
  return (
    <div className={footerStyle.legal_container}>
      <div style={{ display: "flex", gap: "10px" }}>
        <Link style={{ textDecoration: "none", color: "#eee5d4" }}>
          Terms &amp; Conditions
        </Link>
        <Link style={{ textDecoration: "none", color: "#eee5d4" }}>
          Privacy Policy
        </Link>
      </div>
      <p>&copy; 2019 Copyright Nowrap Inc.</p>
    </div>
  );
};
