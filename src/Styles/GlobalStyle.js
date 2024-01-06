import { createGlobalStyle } from "styled-components";
import "@fontsource/montserrat";


const GlobalStyles = createGlobalStyle`
    *,*::before,*::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        transition: color .15s ease, background-color .15s ease;
    }
    body {
        font-family: 'Montserrat', sans-serif;
        overflow-x: hidden;
        font-size: 1.1vw;
    }
    h1,h2,h3,h4,h5,h6 {
        margin: 0;
        padding: 0;
    }
    a {
        color: inherit;
        text-decoration: none;
    }

    .swiper-button-prev, .swiper-button-next {
        visibility: hidden;
    }
`;

export { GlobalStyles };