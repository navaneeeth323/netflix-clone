import { createGlobalStyle } from "styled-components";

export const GlobalStyles  = createGlobalStyle`
html,body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #000000;
    color: #333333;
    font-size: 16px;
    
    @media (max-width:1000px) {
        overflow-x:hidden;
    }
}`;