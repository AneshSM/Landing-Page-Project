import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>
        <Link to="" style={{ textDecoration: "none", color: "#eee5d4" }}>
          NIRAAMAYA
        </Link>
      </HeaderTitle>
      <HeaderNav>
        <Link to="home" style={{ textDecoration: "none", color: "#eee5d4" }}>
          Home
        </Link>
        <Link style={{ textDecoration: "none", color: "#eee5d4" }}>
          About Us
        </Link>
        <Link to="weather" style={{ textDecoration: "none", color: "#eee5d4" }}>
          Specialities
        </Link>
        <Link style={{ textDecoration: "none", color: "#eee5d4" }}>
          Ayurveda Treatments
        </Link>
        <Link style={{ textDecoration: "none", color: "#eee5d4" }}>
          Contacts
        </Link>
      </HeaderNav>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.section`
  height: 10vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #564434;
`;

const HeaderTitle = styled.div`
  min-width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  color: #eee5d4;
  font-size: large;
  font-weight: 800;
`;

const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1 1 auto;
  gap: 5rem;
`;
