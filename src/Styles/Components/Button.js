import { Link } from "react-router-dom";
import { styled } from "styled-components";

const ButtonText = styled(Link)`

    display: flex;
    justify-content: flex-start;
    align-item: center;
    font-weight: 800;
    font-size: 1.3vw;
    text-transform: uppercase;
    width: fit-content;
    position: relative;

    &:hover {
        &:before {
            width: 100%;
            transition: width .2s ease;
        }
    }

    &:before {
        content: "";
        width: 40%;
        height: 2px;
        background-color: ${p => p.theme.red};
        position: absolute;
        display: block;
        bottom: -0.5vw;
        transition: width .2s ease;
    }

    @media (max-width: 64em) {
        font-size: 2.5vw;
    }

    @media (max-width: 48em) {
        &:before {
            bottom: -1vw;
        }
        font-size: 4vw;
    }

`

export { ButtonText }