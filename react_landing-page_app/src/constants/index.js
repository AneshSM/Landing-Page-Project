// Assets
import logo from "../assets/logo.png";

// Icons
// icons
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";
import { NewsletterSignup } from "../utils";

export const headerContent = {
  title: "Landing Page",
  logo: {
    src: logo,
    alt: "logo",
  },
  nav: [
    { name: "Home", to: "home" },
    { name: "About Us", to: "about" },
    { name: "Features", to: "feature" },
    { name: "Contact Us", to: "contact" },
  ],
  auth: [
    { name: "Login", to: "login" },
    { name: "Register", to: "regidter" },
  ],
};

export const footerContent = {
  main: [
    {
      name: "PRODUCTS",
      content: [
        { title: "Angular", to: "" },
        { title: "React", to: "" },
        { title: "Vue", to: "" },
        { title: "Laravel", to: "" },
      ],
    },
    {
      name: "COMPONY",
      content: [
        { title: "About Us", to: "" },
        { title: "Careers", to: "" },
        { title: "Management Team", to: "" },
        { title: "Board of Directors", to: "" },
        { title: "Investor Relations", to: "" },
        { title: "Blog", to: "" },
        { title: "Contact Us", to: "" },
      ],
    },
    {
      name: "USEFUL LINKS",
      content: [
        { title: "Pricing", to: "" },
        { title: "Settings", to: "" },
        { title: "Orders", to: "" },
        { title: "Help", to: "" },
      ],
    },
    {
      name: "CONTACT",
      content: [
        { title: "New York, NY 10012, US", to: "" },
        { title: "info@example.com", to: "" },
        { title: "+ 01 234 567 88", to: "" },
        { title: "+ 01 234 567 89", to: "" },
      ],
    },
    {
      name: "NEWS LETTER",
      data: <NewsletterSignup />,
      content: [{}],
    },
  ],
  legal: {
    tc: { name: "Terms & Conditions", to: "" },
    pp: { name: "Privacy Policy,", to: "" },
    cr: { name: " 2019 Copyright Nowrap Inc.", to: "" },
  },
  top: { name: "Top", to: "#main" },
  icons: [
    { name: "Instagram", tag: <AiFillInstagram />, to: "" },
    { name: "FaceBook", tag: <AiFillFacebook />, to: "" },
    { name: "LinkedIn", tag: <AiFillLinkedin />, to: "" },
    { name: "Twitter", tag: <AiFillTwitterCircle />, to: "" },
  ],
};

export const sliderContent = {
  slides: [
    {
      title: "",
      caption: "",
      imgURL:
        "https://images.pexels.com/photos/4411214/pexels-photo-4411214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "",
      caption: "",
      imgURL:
        "https://images.pexels.com/photos/2017021/pexels-photo-2017021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "",
      caption: "",
      imgURL:
        "https://images.pexels.com/photos/4060937/pexels-photo-4060937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "",
      caption: "",
      imgURL:
        "https://images.pexels.com/photos/6589610/pexels-photo-6589610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ],
};
