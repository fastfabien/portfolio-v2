import React, { useEffect, useRef } from "react";
import { RightContainer } from "../Styles";
import { About, Experiences, Footer, Projects } from "../Sections";

const Right = ({ setRightElement }) => {
  const rightRef = useRef(null);

  useEffect(() => {
    setRightElement(rightRef.current);
  }, [setRightElement]);

  return (
    <RightContainer ref={rightRef}>
      <About />
      <Experiences />
      <Projects />
      <Footer />
    </RightContainer>
  );
};

export default Right;
