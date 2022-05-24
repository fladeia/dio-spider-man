import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root {
  --white: #ffffff;
  --primary-color: #89001f;
}

* {
  margin: 0;
  padding: 0;
  outline:0;
  border: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}

body {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--white);
}

button, a {
  cursor: pointer;
  color: inherit;
}
`
