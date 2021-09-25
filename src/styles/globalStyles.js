import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  height: 100vh;
  display: flex;
  background: #202737;
}
`;

export default GlobalStyle;
