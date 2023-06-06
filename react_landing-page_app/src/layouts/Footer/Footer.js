import React from "react";
import { Link } from "react-router-dom";

import { NewsletterSignup } from "../../utils";

// style
import footerStyle from "./Footer_Style.module.css";
import { footerContent } from "../../constants";

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
    <div className={footerStyle.main_container}>
      {footerContent.main.map((value, index) => (
        <div
          className={`
          ${footerStyle.card}
          ${value.name === "NEWS LETTER" && "min-w-[25rem]"}
          `}
        >
          <h2 className="title_font_size">{value.name}</h2>
          <ul>
            {value.content.map((data, index) => (
              <li className={footerStyle.content}>
                <Link className="common_font_size" to={data.to}>
                  {data.title}
                </Link>
              </li>
            ))}
            <li>{value.data && value.data}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

const SocialFooter = () => {
  return (
    <div className={footerStyle.social_container}>
      {footerContent.icons.map((value, index) => (
        <div className={footerStyle.icon_container}>
          <Link
            className="text-primary_light hover:text-primary_dark "
            to={value.to}
            style={{ textDecoration: "none" }}
          >
            {value.tag}
          </Link>
        </div>
      ))}
    </div>
  );
};
const LegalFooter = () => {
  const { tc, pp, cr } = footerContent.legal;
  return (
    <div className={footerStyle.legal_container}>
      <p className="common_font_size">&copy;{cr.name}</p>
      <div style={{ display: "flex", gap: "10px" }}>
        <Link
          to={pp.to}
          className={"text-primary_light common_font_size"}
          style={{ textDecoration: "none" }}
        >
          {pp.name}
        </Link>
        <Link
          to={tc.to}
          className={"text-primary_light common_font_size"}
          style={{ textDecoration: "none" }}
        >
          {tc.name}
        </Link>
      </div>
    </div>
  );
};
