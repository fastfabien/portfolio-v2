import { Link } from "react-router-dom";
import { styled } from "styled-components";


const Wrapper = styled.main`

    background-color: ${p => p.theme.body};

`

const Main = styled.div`

    display: flex;
    flex-direction: row;
    color: ${p => p.theme.white};
    padding: 0 6.979166666666667vw;
    padding-top: 8.3125vw;
    gap: 0;
    position: relative;
    height: 100vh;

    @media (max-width: 64em) {
        flex-direction: column;
        height: auto;
        padding: 0 4vw;
    }

    @media (max-width: 48em) {
        flex-direction: column;
        height: auto;
        padding: 0 4vw;
    }

`

const H1 = styled.h1`

    font-weight: 200;
    font-size: 4.166666666666667vw;
    text-transform: uppercase;

    @media (max-width: 64em) {
        font-size: 8vw;
    }

    @media (max-width: 48em) {
        font-size: 10vw;
    }

`

const TitleBold = styled.h2`

    font-size: 1.2625vw;
    font-weight: 600;   
    text-transform: uppercase; 
    color: ${p => p.theme.red};

    @media (max-width: 64em) {
        font-size: 3.5vw;
    }

    @media (max-width: 48em) {
        font-size: 5vw;
    }

`

const TextBold = styled.p`

    font-size: 1.5625vw;
    font-weight: 600;   
    text-transform: uppercase; 
    
    @media (max-width: 64em) {
        font-size: 2.5vw;
    }

    @media (max-width: 48em) {
        font-size: 5vw;
    }

`

const LienNav = styled.a`

    font-size: 1.5625vw;
    font-weight: 600;
    text-transform: uppercase;
    line-height: 1.8041666666666665vw;
    opacity: 0.8;
    transition: color .5s ease;
    color: ${p => p.active ? p.theme.red : p.theme.white};
    position: relative;



    &:hover {
        color: ${p => p.theme.red};
        opacity: 1;
        transition: color .5s ease;
    }

    @media (max-width: 64em) {
        font-size: 5vw;
        line-height: 5.6041666666666665vw;
    }

    @media (max-width: 48em) {
        font-size: 6vw;
    }

`

const P = styled.p`

    font-weight: 400;
    font-size: 1.3020833333333333vw;
    line-height: 2.6041666666666665vw;

    @media (max-width: 64em) {
        font-size: 3vw;
        line-height: 4.6041666666666665vw;
    }

    @media (max-width: 48em) {
        font-size: 5vw;
    }

`

const A = styled(Link)`

    font-weight: 400;
    font-size: 1.5625vw;
    line-height: 2.6041666666666665vw;

    &:hover {
        color: ${p => p.theme.red};
    }

    @media (max-width: 64em) {
        font-size: 2.5vw;
        line-height: 4.6041666666666665vw;
    }

    @media (max-width: 48em) {
        font-size: 5vw;
    }

`

const LeftContainer = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    padding: 0 6.979166666666667vw;
    padding-top: 8.3125vw;
    padding-bottom: 4.375vw;

    @media (max-width: 64em) {
        flex-direction: column;
        position: static;
        width: 100%;
        height: auto;
        padding-left: 2vw;
        padding-right: 2vw;
        padding-bottom: 2vw;
    }

`

const Heading = styled.div`

    display: flex;
    flex-direction: column;
    gap: 1.0416666666666667;

`

const FooterNav = styled.div`

    display: flex;
    flex-direction: column;
    gap: 1.5416666666666667vw;

     @media (max-width: 64em) {
        display: none;
    }
    

`
const RightContainer = styled.div`
    overflow-x: hidden;
    overflow-y: scroll;
    position: fixed;
    top: 0;
    right: 0;
    gap: 10vw;
    width: 50%;
    display: flex;
    flex-direction: column;
    padding: 0 4.979166666666667vw;
    padding-top: 8.3125vw;
    padding-bottom: 0vw;
    z-index: 1;
    
    &::-webkit-scrollbar {
        display: none;
    }

    scrollbar-width: none;

    @media (max-width: 64em) {
        flex-direction: column;
        position: static;
        width: 100%;
        overflow: auto;
        padding-left: 2vw;
        padding-right: 2vw;
    }

`

const ExperienceContainer = styled.div`

    display: flex;
    flex-direction: column;
    gap: 3vw;

    @media (max-width: 48em) {
        gap: 20vw;
    }


`

const FooterContainer = styled.div`

    display: flex;
    flex-direction: column;
    gap: 5vw;
    padding-bottom: 5vw;

    ${P} {
        font-size: 1.2vw;
        line-height: 2vw;
        opacity: .8;

        & a {
            color: ${p => p.theme.red};
            font-weight: 800;
            opacity: .8;
            &:hover {
                opacity: 1;
            }
        }

        @media (max-width: 60em) {
            font-size: 1.8vw;
            line-height: 3vw;
        }

         @media (max-width: 48em) {
            font-size: 4vw;
            line-height: 6vw;
        }
    }

`

const LinkContact = styled.div`

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1vw;

    & a {
        opacity: .8;
        &:hover {
            opacity: .9;
        }
    }

    & svg {
        height: 2.5vw;
        width: 2.5vw;
        fill: ${p => p.theme.whiteAlways};

        &:hover {
            fill: ${p => p.theme.red};
        }

        @media (max-width: 60em) {
            height: 5vw;
            width: 5vw;
        }

         @media (max-width: 48em) {
            height: 8vw;
            width: 8vw;
        }
    }

    @media (max-width: 60em) {
        margin-top: 5vw;
        gap: 3vw;
    }

    @media (max-width: 48em) {
        margin-top: 8vw;
        gap: 4vw;
    }


`

export {
    Wrapper,
    Main,
    H1,
    P,
    A,
    TitleBold,
    TextBold,
    LienNav,
    LeftContainer,
    RightContainer,
    Heading,
    FooterNav,
    ExperienceContainer,
    FooterContainer,
    LinkContact
}