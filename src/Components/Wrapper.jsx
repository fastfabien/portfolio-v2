import React, { useEffect, useRef, useState } from "react";
import { Main } from "../Styles/Main";
import Left from "./Left";
import Right from "./Right";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Home = () => {
  gsap.registerPlugin(ScrollTrigger);
  const mainRef = useRef(null);
  const [rightElement, setRightElement] = useState();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    let element = mainRef.current;
    let scrollingElement = rightElement;
    let t1 = gsap.timeline();

    const handleGetScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleGetScreenWidth);

    if (scrollingElement && element && screenWidth > 1024) {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: "bottom+=100% top-=100%",
          scrub: true,
          pin: true,
          // markers: true,
        },
        ease: "none",
      });

      // Vertical Scroll
      t1.fromTo(
        scrollingElement,
        {
          y: "0",
        },
        {
          y: "-100%",
          scrollTrigger: {
            trigger: scrollingElement,
            start: "top top",
            end: "bottom top",
            scrub: true,
            // markers: true,
          },
        }
      );
      ScrollTrigger.refresh();
    }

    return () => {
      t1.kill();
      ScrollTrigger.killAll();
      window.removeEventListener("resize", handleGetScreenWidth);
    };
  }, [rightElement, screenWidth]);

  let setRightElementValue = (elementValue) => setRightElement(elementValue);

  return (
    <Main ref={mainRef}>
      <Left />
      <Right setRightElement={setRightElementValue} />
    </Main>
  );
};

export { Home };
