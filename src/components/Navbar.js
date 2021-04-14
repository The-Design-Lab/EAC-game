import React from 'react'
import styled from 'styled-components'
import LinkButton from './LinkButton'

const NavBar = styled.nav`
  width: 100%;
  position: fixed;
  bottom: 0;
`
const Container = styled.div`
  display: flex;
  align-items: center;
  height: 58px;
  background-color: var(--color-primary);
  box-shadow: var(--bevel-default);
  padding: 10px 5px;
`

function Navbar() {
  return (
    <NavBar>
      <Container>
        <LinkButton label="Game" />
        <LinkButton label="Dictionary" />
      </Container>
    </NavBar>
  )
}

export default Navbar
