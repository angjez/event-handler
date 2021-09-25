import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i,900,900i&display=swap');
@import url("https://fonts.googleapis.com/css?family=PT+Sans:400,700&display=swap");

body {
  font-family: "Roboto", "sans-serif";
  margin: 0;

  input {
    font-family: inherit;
  }
}
`;

export default GlobalStyle;
