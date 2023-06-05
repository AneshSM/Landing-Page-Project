import React, { useState } from "react";
import { Link } from "react-router-dom";

// styles
import styled from "styled-components";
import headerStyle from "./Header_Style.module.css";
// constants

const Header = () => {
  return (
    <div className={headerStyle.container}>
      <Link
        className={headerStyle.title}
        to=""
        style={{ textDecoration: "none", color: "#eee5d4" }}
      >
        <img
          className={headerStyle.logo}
          alt="logo img"
          src="https://th.bing.com/th/id/R.16e273d0a0d0d398df0aa426a35af2a7?rik=8gSekYHyjw2pDA&riu=http%3a%2f%2fqplexus.com%2fwp-content%2fuploads%2f2016%2f02%2fdefault-logo.png&ehk=uhqSxDXgEqmT%2fMg%2fPyt1yXJoGUP9G4SfiuiqHy8sWc4%3d&risl=&pid=ImgRaw&r=0"
        />
        <h1> Landing Page</h1>
      </Link>
      {window_Width > 1023 && (
        <nav className={headerStyle.navBar}>
          <Link to="home" style={{ textDecoration: "none", color: "#eee5d4" }}>
            Home
          </Link>
          <Link style={{ textDecoration: "none", color: "#eee5d4" }}>
            About Us
          </Link>
          <Link
            to="projects"
            style={{ textDecoration: "none", color: "#eee5d4" }}
          >
            Projects
          </Link>
          <Link style={{ textDecoration: "none", color: "#eee5d4" }}>
            Contact
          </Link>
        </nav>
      )}
    </div>
  );
};

export default Header;
