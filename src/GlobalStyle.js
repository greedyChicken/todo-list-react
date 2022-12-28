import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        background-color: #eee;
        margin: 0 30px 0;
    }
`;
