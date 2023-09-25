import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font: 400 16px Lato, sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialized;
  }

  html, body {
    height: 100% ;
  }

  li{
    list-style: none;
  }

  a{
    text-decoration: none;
  }

  button{
    cursor: pointer;
  }

  div, a, img{
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  img{
    max-width: 100%;
    height: 100%;
  }

`;
