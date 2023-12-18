import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };

  html{
    font-size: 10px;
  }
  
  body {
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
    background: ${(props) => props.theme['backgound']};
  };
`