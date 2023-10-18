import { styled } from "styled-components";

const AboutContainer = styled.div`

    color: rgba(${p => p.theme.whiteRgba}, .8);
    display: flex;
    flex-direction: column;

    & p {
        font-size: 1vw;
        line-height: 1.6em;

        &:not(:last-child) {
            margin-bottom: 2vw;
        }
    }
    
    @media (max-width: 64em) {
        & p {
            font-size: 1.8vw;
            line-height: 3vw;
        }
    }

    @media (max-width: 48em) {
        & p {
            font-size: 4vw;
            line-height: 6vw;
        }
    }

`


export { AboutContainer }