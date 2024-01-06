import React from "react";
import { ModeContainer } from "../Styles/Components/mode";
import { lightMode } from "../assets/SVG/light";
import { darkMode } from "../assets/SVG/dark";

const Mode = ({ isLight, goLight }) => {
  return (
    <ModeContainer onClick={() => goLight()}>
      {isLight ? darkMode : lightMode}
    </ModeContainer>
  );
};

export default Mode;
