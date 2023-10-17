import React, { useRef } from "react";
import {
  FooterNav,
  H1,
  Heading,
  LeftContainer,
  LienNav,
  LinkContact,
  TitleBold,
} from "../Styles/Main";
import { Linkedin, gitHub } from "../assets/SVG";

const Left = () => {
  const leftRef = useRef(null);

  return (
    <LeftContainer ref={leftRef}>
      <Heading>
        <H1>Fast Fabien</H1>
        <TitleBold>dévéloppeur front-end & Intégrateur</TitleBold>
      </Heading>
      <FooterNav>
        <LienNav href="/" active="true">
          a propos
        </LienNav>
        <LienNav href="#experiences">expériences</LienNav>
        <LienNav href="/">projects</LienNav>
      </FooterNav>
      <LinkContact>
        <a
          href="https://gitHub.com/fastfabien"
          target="_blank"
          rel="noreferrer"
        >
          {gitHub}
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          {Linkedin}
        </a>
      </LinkContact>
    </LeftContainer>
  );
};

export default Left;
