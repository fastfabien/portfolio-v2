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

const Left = () => {
  const leftRef = useRef(null);

  const HandleScrollTo = (id) => {
    const element = document.getElementById(id);
    let elementIn =
      element.offsetTop - element.offsetHeight + element.offsetHeight / 4;

    if (element) {
      window.scrollTo({
        top: elementIn,
        behavior: "smooth",
      });
    }
  };

  return (
    <LeftContainer ref={leftRef}>
      <Heading>
        <H1>Fast Fabien</H1>
        <TitleBold>dévéloppeur front-end & Intégrateur</TitleBold>
      </Heading>
      <FooterNav>
        <LienNav onClick={() => HandleScrollTo("about")} active="true">
          a propos
        </LienNav>
        <LienNav onClick={() => HandleScrollTo("experiences")}>
          expériences
        </LienNav>
        <LienNav onClick={() => HandleScrollTo("projects")}>projects</LienNav>
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
          href="https://linkedin.com/in/fastfabien"
          target="_blank"
          rel="noreferrer"
        >
          {Linkedin}
        </a>
        <a
          href="https://github.com/fastfabien"
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
