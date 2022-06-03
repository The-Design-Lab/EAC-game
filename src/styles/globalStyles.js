import { createGlobalStyle } from "styled-components";
import device from "./mediaQueries";

const GlobalStyle = createGlobalStyle`
  :root {
    // Colors
    --color-primary: #171515; // gray
    --color-primary-light: #E4E4E4; // light-gray
    --color-secondary: #000082; // blue
    --color-tertiary: #F9BA7F; // orange

    // Bevels
    --bevel-default: 
      inset -2px -2px 0 0 #000, 
      inset 2px 2px 0 0 #fff,
      inset -3px -3px 0 0 var(--color-primary), 
      inset 3px 3px 0 0 #DEDCDE;

    --bevel-active:
      inset -1px -1px 0 0 #fff, 
      inset 1px 1px 0 0 #000, 
      inset -2px -2px 0 0 var(--color-primary), 
      inset 2px 2px 0 0 #DEDCDE;
  
    // Fonts

  }

  * {
    
    
  }

  html {
    font-size: 16px;
    color: azure;
  }

  body {
    background: #0D0C0C;

    // center window 
 
    
  }

  body,button {
    font-family: var(--body);
  }

  h1 {
    font-size: 4.209rem;
    

    @media ${device.tabletS} {
      /* font-size: 1.62rem; */
    }
  }

  h2 {
    font-size: 3rem;
  }
  h3 {
    font-size: 2.369rem;
  }
  h4 {
    font-size: 1.777rem;
  }
  h5 {
    font-size: 1.333rem;
  }
  h6 {
    font-size: 0.75rem;
  }
  p {
    font-size: 1rem;
    
  }

  button{
    font-size: 0.875rem;
  }





  input[type='radio']{
    display:none;
    &:checked + label{
      opacity:.4;
    }
  }
  

`;

export default GlobalStyle;
