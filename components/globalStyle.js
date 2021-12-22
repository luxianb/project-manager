import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  h1, h2, h3, h4, h5, h6, p, a {
    margin: 0;
  }
  a { 
    cursor: pointer
  }

  input, textarea, select {
    border-radius: 6px;
    padding: 6px;
    border: 1px solid #90a4ae;
  }

  button {
    padding: 6px 12px;
    border: none;
    border-radius: 3px;
    background-color: #3d5afe;
    color: white;
    cursor: pointer;
    box-sizing: border-box;
  }
  button.secondary {
    border: 1px solid #3d5afe;
    background-color: white;
    color: #3d5afe;
  }
  button:disabled{
    background-color: #eceff1;
    color: #546e7a;
    cursor: initial;
  }
`;

export default GlobalStyle;