import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  ol, ul {
    list-style: none;
  }

  button:hover {
    cursor: pointer;
  }

  body::-webkit-scrollbar {
    width: 10px;
  }

  body::-webkit-scrollbar-thumb {
    background-color: rgb(235, 94, 40);
    border-radius: 10px;
  }
  
  body::-webkit-scrollbar-track {
    background: rgba(37, 36, 34, 0.74);
  }

`;

export default GlobalStyle;
