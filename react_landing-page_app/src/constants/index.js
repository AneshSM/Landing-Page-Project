import logo from "../assets/logo.png";
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
