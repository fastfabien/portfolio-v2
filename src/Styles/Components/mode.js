import styled from "styled-components";

const ModeContainer = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    height: auto;
    width: auto;
    position: fixed;
    top: 2.3125vw;
    right: 50%;
    transform: translateX(-48%);
    cursor: pointer;
    z-index: 20;

    transition: transform .2s ease-out;

    &:hover {
        transform: translateX(-48%) scale(1.1);
        transition: transform .2s ease-out;
    }
`

const SVGContent = styled.svg`

    width: 3vw;
    height: 3vw;

`

export { ModeContainer, SVGContent }