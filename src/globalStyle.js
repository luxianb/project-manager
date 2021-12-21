import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  h1, h2, h3, h4, h5, h6, p, a {
    margin: 0;
  }

  a { cursor: pointer }
`;

export default GlobalStyle;