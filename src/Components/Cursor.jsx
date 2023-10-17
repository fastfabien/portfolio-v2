import React, { useEffect, useRef } from "react";
import { CursorContainer } from "../Styles";

const Cursor = ({ x, y }) => {
  const cursorRef = useRef(null);

  useEffect(() => {
    cursorRef.current.style.left = `${x}px`;
    cursorRef.current.style.top = `${y}px`;
  }, [x, y]);

  return <CursorContainer ref={cursorRef}></CursorContainer>;
};

export default Cursor;
