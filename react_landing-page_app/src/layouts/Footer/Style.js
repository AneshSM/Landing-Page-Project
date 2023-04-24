import styled from "styled-components";

export const FooterContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
`;

export const MainFooterContainer = styled.section`
  width: 100%;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px;
  flex: 2 1 auto;
`;
export const SocialFooterContainer = styled.section`
  width: 100%;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  gap: 10px;
  flex: 1 1 auto;
`;
export const LegalFooterContainer = styled.section`
  width: 100%;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const SocialIcon = styled.div`
  min-height: 5vh;
  min-width: 5vh;
  border: 1px solid blue;
`;
