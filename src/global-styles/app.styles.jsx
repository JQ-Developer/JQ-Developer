import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

 *,
*::after,
*::before {
  margin: 0;
  padding: 0;
}

body {
  box-sizing: border-box;
  background-color: #0a192f;
}

html a {
  text-decoration: none;
  color: white;
}

html {
  overflow-x: hidden;
} 
`;
