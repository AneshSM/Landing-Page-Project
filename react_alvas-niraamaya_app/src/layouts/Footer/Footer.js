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
  const specialities = [
    "Spine care-spondylitis and disc problems",
    "Lifestyle disorders",
    "Gynaec disorders",
    " Eye diseases",
    "ENT diseases",
    "Post covid treatment",
    "Sports medicine",
    "Paediatrics",
  ];
  const treatments = [
    "Panchakarma therapies",
    "Keraleeya ayurveda therapies",
    "Kayakalpa (rejuvenation and de-stress)",
    "Anushastra chikitsa ar para surgical treatment",
    "Yoga",
    "Physiotherapy",
    "Kalari marma chikitsa",
  ];
  return (
    <div className={footerStyle.main_container}>
      <div className={footerStyle.about}>
        <h1>About</h1>
        <p>
          warm regards from,
          <br /> Alva's Niraamaya AYUSH Multy speciality Hospital
          <br /> vidyagiri ,moodbidre.
        </p>
      </div>
      <ListComponent title={"Specialities"} items={specialities} />
      <ListComponent title={"Ayurveda Treatments"} items={treatments} />
      <NewsletterSignup />
    </div>
  );
};

const SocialFooter = () => {
  return (
    <div className={footerStyle.social_container}>
      <div className={footerStyle.icon_container}>
        <Link style={{ textDecoration: "none", color: "#eee5d4" }}>
          <AiFillInstagram />
        </Link>
      </div>
      <div className={footerStyle.icon_container}>
        <Link style={{ textDecoration: "none", color: "#eee5d4" }}>
          <AiFillTwitterCircle />
        </Link>
      </div>
      <div className={footerStyle.icon_container}>
        <Link style={{ textDecoration: "none", color: "#eee5d4" }}>
          <AiFillFacebook />
        </Link>
      </div>
      <div className={footerStyle.icon_container}>
        <Link style={{ textDecoration: "none", color: "#eee5d4" }}>
          <AiFillLinkedin />
        </Link>
      </div>
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
      <p>&copy; 2023 Copyright Alvas</p>
    </div>
  );
};
