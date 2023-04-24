import React from "react";
import {
  ListComponentContainer,
  ListContents,
  ListHead,
  ListItem,
} from "./Style";

const ListComponent = (props) => {
  return (
    <ListComponentContainer>
      <ListHead>{props.title}</ListHead>
      <ListContents>
        <ListItem></ListItem>
      </ListContents>
    </ListComponentContainer>
  );
};

export default ListComponent;
