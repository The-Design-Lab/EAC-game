import { createGlobalStyle } from 'styled-components'
import device from './mediaQueries'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    background: slategray;
  }

  :root {
    // Colors
    --color-primary: #C9CBCD; // gray
    --color-secondary: #2940FF; // blue
    --color-tertiary: #6CF9AF; // green


  }
`

export default GlobalStyle
