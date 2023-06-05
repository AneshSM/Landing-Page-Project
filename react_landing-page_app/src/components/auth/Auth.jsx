import React from "react";
import { headerContent } from "../../constants";
import { Link } from "react-router-dom";

const Auth = () => {
  return (
    <div>
      {headerContent.auth.map((value, index) => (
        <Link to={value.name}>{value.name}</Link>
      ))}
    </div>
  );
};

export default Auth;
