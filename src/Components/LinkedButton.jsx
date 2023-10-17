import React, { useEffect } from "react";
import { ButtonText } from "../Styles";

const LinkedButton = ({ children, link }) => {
  useEffect(() => {}, []);
  return (
    <ButtonText to={link} target="_blank" rel="noreferrer">
      {children}
    </ButtonText>
  );
};

export { LinkedButton };
