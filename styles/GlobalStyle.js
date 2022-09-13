import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Oswald', sans-serif;
  }

  body {
    background: white;
  }

  input {
    outline: none;
    box-sizing: border-box !important;
    font-family: 'Oswald', sans-serif;;
  }

  textarea {
    outline: none;
    box-sizing: border-box !important;
    font-family: 'Oswald', sans-serif;;
  }
`
