import { styled } from "styled-components";

const CursorContainer = styled.div`

    width: 60.041666666666668vw;
    height: 60.041666666666668vw;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;
    background: ${p => p.theme.white};
    background: radial-gradient(circle, rgba(${p => p.theme.cursorColorInner}) ${p => p.theme.cursorColorInnerOpacity}, rgba(${p => p.theme.cursorColorOutter}) ${p => p.theme.cursorColorOutterOpacity});
    opacity: .1;

`


export { CursorContainer }