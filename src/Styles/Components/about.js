import { styled } from "styled-components";

const AboutContainer = styled.div`

    color: rgba(${p => p.theme.whiteRgba}, .8);

    & p {
        font-size: 1.2vw;
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