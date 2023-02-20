import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    color:${({ theme }) => theme.COLORS.LIGHT_100};
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
  }

  body, button {
    font-family: 'Poppins', serif;
  } 
  input, text-area {
    font-family: 'Roboto', serif;
  } 

  input,button {
    border: none;
  }

  a {
    text-decoration: none;
  }

  a,button {
    cursor: pointer;
    transition: filter 0.2s;
  }

  a:hover {
    filter: brightness(0.9)
  } 

  label  {
    font-family: 'Roboto', serif;
  }
`;