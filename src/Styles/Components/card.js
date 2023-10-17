import { Link } from "react-router-dom";
import { styled } from "styled-components";

const CardExperience = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 2vw;
    width: 100%;
    padding: 1.5vw;
    border-radius: 1vw;
    border: 1px solid transparent;
    cursor: pointer;
    backdrop-filter: blur(0);
    transition: background .5s ease, transform .5s ease, backdrop-filter .5 ease;

    &:hover {
        border: 1px solid rgba(34, 33, 33, 0.09);
        background: rgba(${p => p.theme.backgroundGlass}, 0.05);
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.10);
        backdrop-filter: blur(7px);
        transition: background .5s ease, transform .5s ease, backdrop-filter .5 ease;
    }

    @media (max-width: 64em) {
        gap: 5vw;
        padding: 4vw 3vw;
    }
    @media (max-width: 48em) {
        flex-direction: column;
        padding: 0;

        &:hover {
            border-color: transparent;
            background: unset;
            box-shadow: unset;
            backdrop-filter: unset;
            transform: unset;
        }
    }
`

const Card = styled(Link)`

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 2vw;
    width: 100%;
    padding: 1.5vw;
    border-radius: 1vw;
    border: 1px solid transparent;
    cursor: pointer;
    backdrop-filter: blur(0);
    transition: background .5s ease, transform .5s ease, backdrop-filter .5 ease;

    &:hover {
        border: 1px solid rgba(34, 33, 33, 0.09);
        background: rgba(${p => p.theme.backgroundGlass}, 0.05);
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.10);
        backdrop-filter: blur(7px);
        transition: background .5s ease, transform .5s ease, backdrop-filter .5 ease;
    }

    @media (max-width: 64em) {
        gap: 5vw;
        padding: 4vw 3vw;
    }
    @media (max-width: 48em) {
        flex-direction: column;
        padding: 0;

        &:hover {
            border-color: transparent;
            background: unset;
            box-shadow: unset;
            backdrop-filter: unset;
            transform: unset;
        }
    }
`

const LeftCard = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: flex-start;

    p {
        font-size: 1vw;
        opacity: .5;
        text-transform: uppercase;
    }

    img {
        width: 6.208333333333333vw;
        height: 6.208333333333333vw;
        object-fit: contain;
    }

    @media (max-width: 64em) {
        & p {
            font-size: 2.5vw;
            opacity: 1;
        }

        & img {
            width: 10vw;
            height: 10vw;
            object-fit: contain;
        }
    }

    @media (max-width: 48em) {
        width: 100%;
        & p {
            font-size: 4vw;
            line-height: 6vw;
        }

        & img {
            width: 100%;
            height: 50vw;
            object-fit: cover;
        }
    }
`
const RightCard = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1vw;
    width: 80%;
    padding-right: 1.2vw;

    & h2 {
        font-size: 1.1vw;
        margin-top: .5vw;
        line-height: 1.8vw;
        color: ${p => p.theme.white};
    }

    & p {
        font-size: 1vw;
        line-height: 1.5vw;
        font-weight: 500;
        opacity: .8;
    } 

    @media (max-width: 64em) {

        gap: 3vw;

        & p {
            font-size: 1.8vw;
            line-height: 3vw;
            opacity: 1;
        }

        & h2 {
            font-size: 2.5vw;
            line-height: 6vw;
        }
    }

    @media (max-width: 48em) {
        width: 100%;
        gap: 5vw;
        & p {
            font-size: 4vw;
            line-height: 6vw;
        }

        & h2 {
            font-size: 5vw;
        }
    }


`


const Technos = styled.div`

    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 1vw;

    @media (max-width: 64em) {
        gap: 2vw;
    }

    @media (max-width: 48em) {
        gap: 2vw;
    }

    


`

const Techno = styled.span`

    padding: .8vw;
    background-color: rgba(${p => p.theme.redRgba}, 0.8);
    color: ${p => p.theme.whiteAlways};
    display: inline;
    width: fit-content;
    border-radius: 1.5625vw;
    font-size: .9vw;
    font-weight: 800;

    @media (max-width: 64em) {
        padding: 1vw;
        font-size: 1.5vw;
        border-radius: 3vw;
    }

    @media (max-width: 48em) {
        padding: 1.5vw;
        border-radius: 4vw;
        font-size: 3vw;
    }


`

export { Card, LeftCard, RightCard, Technos, Techno, CardExperience }