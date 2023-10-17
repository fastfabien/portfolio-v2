import React from "react";
import { FooterContainer, P } from "../Styles";

const Footer = () => {
  return (
    <FooterContainer>
      <P>
        Coder dans{" "}
        <a
          href="https://code.visualstudio.com/"
          target="_blank"
          rel="noreferrer"
        >
          Visual Studio Code
        </a>{" "}
        avec{" "}
        <a href="https://react.dev/" target="_blank" rel="noreferrer">
          React.JS
        </a>
        ,{" "}
        <a
          href="https://styled-components.com/"
          target="_blank"
          rel="noreferrer"
        >
          Styled Components
        </a>{" "}
        et heberger sur <a href="https://vercel.com/">Vercel.</a>
      </P>
    </FooterContainer>
  );
};

export { Footer };
