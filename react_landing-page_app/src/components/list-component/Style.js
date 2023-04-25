import styled from "styled-components";

export const ListComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  padding: 10px;
  gap: 10px;
`;

export const ListHead = styled.h1`
  font-size: x-large;
`;

export const ListContents = styled.ul`
  list-style: none;
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
`;

export const ListItem = styled.li`
  width: 100%;
`;
