import { styled } from "styled-components";

const FormContainer = styled.form`

    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 2vw;

    @media (max-width: 64em) {
        gap: 5vw;
    }


`

const Input = styled.input`

    font-family: 'Montserrat', sans-serif;
    appearance: none;
    border: none;
    background-color: ${p => p.theme.white};
    color: ${p => p.theme.body};
    padding: 1vw 2vw;
    ${'' /* border-bottom: 2px solid ${p => p.theme.red}; */}
    outline: none;

    @media (max-width: 64em) {
        padding: 3vw;
        font-size: 2.5vw;
    }

`

const Textarea = styled.textarea`


    font-family: 'Montserrat', sans-serif;
    appearance: none;
    border: none;
    background-color: ${p => p.theme.white};
    color: ${p => p.theme.body};
    padding: 1vw 2vw;
    ${'' /* border-bottom: 2px solid ${p => p.theme.red}; */}
    outline: none;
    height: 5vw;
    
    @media (max-width: 64em) {
        padding: 3vw;
        font-size: 2.5vw;
        height: 15vw;
    }

`

const SubmitButton = styled.input`

    border-radius: none;
    background-color: ${p => p.theme.red};
    padding: 1vw 2vw;
    text-align: center;
    border: none;
    color: ${p => p.theme.white};
    text-transform: uppercase;
    font-weight: 600;
    display: block;
    cursor: pointer;

    &:hover {
        background-color: rgba(${p => p.theme.redRgba}, .8);
    }

    @media (max-width: 64em) {
        padding: 3vw;
        font-size: 2.5vw;
    }


`

export { FormContainer, Input, Textarea, SubmitButton };