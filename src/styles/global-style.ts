import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

// Global Constants
const TOP_NAVBAR_HEIGTH = "5rem";
const BOTTOM_NAVBAR_HEIGTH = "5rem";
const BOTTOM_SHEET_HEIGHT = window.innerHeight;

export const GlobalStyle = createGlobalStyle`
    ${reset}

      /* Global Styles */
  :root {
    --top-navbar-height: ${TOP_NAVBAR_HEIGTH};
    --btm-navbar-height: ${BOTTOM_NAVBAR_HEIGTH};
    --btm-sheet-height: ${BOTTOM_SHEET_HEIGHT};
    --primary-color: rgba(77, 134, 156, 0.8);
    --secondary-color: rgba(122, 178, 178, 1);
    --tertiary-color: rgba(205, 232, 229, 1);
    --main-bg-color: rgba(238, 247, 255, 1);
    
  }

  * {
    box-sizing: border-box;
  }
  
  
  body {
    font-family: Arial, sans-serif;
    background-color: #ffffff;
    margin: 0;
    padding: 0;
    font-family: "IBM Plex Sans KR", sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background-color: transparent;
  }
`;
