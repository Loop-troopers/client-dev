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
    --primary-color: rgba(70, 130, 180, 1);
  }

  * {
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: #ffffff;
    margin: 0;
    padding: 0;
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
