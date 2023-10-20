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

gsap.registerPlugin(ScrollTrigger);

const Left = () => {
  const leftRef = useRef(null);
  const [isActive, setIsActive] = useState("");

  useEffect(() => {
    const sections = ["about", "experiences", "projects"];
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: `#${section}`,
        start: "top 20%",
        end: "bottom 40%",
        onEnter: () => {
          setIsActive(() => section);
        },
      });
    });

    return () => {};
  });

  const debounce = (func, wait) => {
    let timeout;
    return function (...args) {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
    };
  };

  const handleScrollToExperiences = debounce((id) => {
    const about = document.getElementById("about");
    const element = document.getElementById(id);
    if (about && element) {
      let elementIn = about.offsetTop + about.offsetHeight / 2;

      window.scrollTo({
        top: elementIn,
        behavior: "smooth",
      });
    }
  }, 100);

  const handleScrollTo = debounce((id) => {
    const element = document.getElementById(id);
    if (element) {
      let elementIn =
        element.offsetTop - element.offsetHeight + element.offsetHeight / 2.5;

      window.scrollTo({
        top: elementIn,
        behavior: "smooth",
      });
    }
  }, 100);

  const handleClick = (e, id, scrollHandler) => {
    e.preventDefault();
    scrollHandler(id);
  };

  return (
    <LeftContainer ref={leftRef}>
      <Heading>
        <H1>Fast Fabien</H1>
        <TitleBold>dévéloppeur front-end & Intégrateur</TitleBold>
      </Heading>
      <FooterNav>
        <LienNav
          onClick={(e) => handleClick(e, "about", handleScrollTo)}
          data-section="about"
          active={isActive === "about"}
        >
          a propos
        </LienNav>
        <LienNav
          onClick={(e) =>
            handleClick(e, "experiences", handleScrollToExperiences)
          }
          data-section="experiences"
          active={isActive === "experiences"}
        >
          expériences
        </LienNav>
        <LienNav
          onClick={(e) => handleClick(e, "projects", handleScrollTo)}
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
