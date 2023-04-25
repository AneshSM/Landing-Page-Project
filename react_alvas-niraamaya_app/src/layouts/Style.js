import styled from "styled-components";

export const MainLayoutContainer = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-grow: 1;
  position: relative;
`;

export const MainContent = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  flex: 1 1 auto;
  overflow-y: scroll;
`;
