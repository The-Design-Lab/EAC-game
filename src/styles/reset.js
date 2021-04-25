import { createGlobalStyle } from 'styled-components'
const Reset = createGlobalStyle`
	a{
		text-decoration: none;
	}
	img {
    width: 100%;
    height: auto;
  }

  input[type=checkbox] {
    position: absolute;
    opacity: 0;
    cursor: inherit;
  }
`

export default Reset
