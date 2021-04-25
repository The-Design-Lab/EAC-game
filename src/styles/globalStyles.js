import { createGlobalStyle } from 'styled-components'
import device from './mediaQueries'

const GlobalStyle = createGlobalStyle`
  :root {
    // Colors
    --color-primary: #C9CBCD; // gray
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
    --body: 'IBM Plex Sans', sans-serif;
    --display: 'IBM Plex Mono', monospace;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    background: #018281;

    // center window 
    display:grid;
    height: 93vh;
    place-items: center;
    justify-items: stretch;
  }

  body,button {
    font-family: var(--body);
  }

  h1 {
    font-size: 4.209rem;
    line-height: 1.0em;
    margin-bottom:20px;

    @media ${device.tabletS} {
      /* font-size: 1.62rem; */
    }
  }

  h2 {
    font-size: 3.157rem;
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
    margin-bottom:15px;
  }

  button{
    font-size: 0.875rem;
  }

  hr{
    box-shadow: var(--bevel-default);
    margin: 40px 0 30px 0;
  }

  ul{
    list-style: inside;

    li {
      list-style-type: disclosure-closed;
      font-weight:700;
      margin-bottom:5px;
    }
  }
  
}

  
`

export default GlobalStyle
