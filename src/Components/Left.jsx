import React, { useEffect, useRef, useState } from "react";
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
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Left = () => {
  gsap.registerPlugin(ScrollTrigger);
  const leftRef = useRef(null);
  const sections = ["about", "experiences", "projects"];
  const [isActive, setIsActive] = useState("about");

  const setActiveOnProgress = (s) => {
    s.forEach((section) => {
      ScrollTrigger.create({
        trigger: `#${section}`,
        start: "top 20%",
        end: "bottom 40%",
        onEnter: () => {
          setIsActive(section);
        },
      });
    });
  };

  useEffect(() => {
    setActiveOnProgress(sections);
  });

  const HandleScrollToExperiences = (id) => {
    const about = document.getElementById("about");
    const element = document.getElementById(id);
    console.log(about.offsetHeight);

    if (about && element) {
      let elementIn = about.offsetTop + about.offsetHeight / 2;

      window.scrollTo({
        top: elementIn,
        behavior: "smooth",
      });
    }
  };

  const HandleScrollTo = (id) => {
    const element = document.getElementById(id);
    let elementIn =
      element.offsetTop - element.offsetHeight + element.offsetHeight / 2.5;

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
        <LienNav
          onClick={() => HandleScrollTo("about")}
          data-section="about"
          active={isActive === "about"}
        >
          a propos
        </LienNav>
        <LienNav
          onClick={() => HandleScrollToExperiences("experiences")}
          data-section="experiences"
          active={isActive === "experiences"}
        >
          expériences
        </LienNav>
        <LienNav
          onClick={() => HandleScrollTo("projects")}
          data-section="projects"
          active={isActive === "projects"}
        >
          projects
        </LienNav>
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
