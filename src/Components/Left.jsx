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
import { Linkedin, gitHub, gmail } from "../assets/SVG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faImagePortrait } from "@fortawesome/free-solid-svg-icons";

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
          href="mailTo:fastfabien56@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          {gmail}
        </a>
        <a
          href="https://linkedin.com/fastfabien"
          target="_blank"
          rel="noreferrer"
        >
          {Linkedin}
        </a>
        <a
          href="https://gitHub.com/fastfabien"
          target="_blank"
          rel="noreferrer"
        >
          {gitHub}
        </a>
      </LinkContact>
    </LeftContainer>
  );
};

export default Left;
