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
        {props.items &&
          props.items.map((item, key) => <ListItem key={key}>{item}</ListItem>)}
      </ListContents>
    </ListComponentContainer>
  );
};

export default ListComponent;
