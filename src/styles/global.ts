import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
    // background
    --background-menu:#080019;
    --background:#1A082D;

    // Fonts
    --title :#FFF;
    --sub-title: #86788E;
    

    // extras
    --background-line2 :#542D5F;
    --background-line3 :#090311;
    --background-line4 : #270553;
    --background-line5 :#3B2A42;
    --background-line6 :#604B61;
    --background-line7 :#8B7E94;



}


*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    background: var(--background);
}

`;