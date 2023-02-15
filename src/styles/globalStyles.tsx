// global styles for the app styled components

import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}
  
  *, *:before, *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  html {
    box-sizing: border-box;
    font-size: 16px;
    font-family: ${({ theme: { font } }) => font.family};
  }
  `;

export default GlobalStyles;
