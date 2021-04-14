import React from 'react'
import styled from 'styled-components'

const NavBar = styled.nav`
  width: 100%;
  height: 58px;
  background-color: var(--color-primary);
  box-shadow: var(--bevel-default);
  position: fixed;
  bottom: 0;
`

function Navbar() {
  return <NavBar />
  
}

export default Navbar
