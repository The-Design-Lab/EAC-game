import React from 'react'
import styled from 'styled-components'
import Button from './Button'

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
      <Co
      ntainer>
        <Button type="navItem" label="Game" />
        <Button type="navItem" label="Dictionary" />
      </Co>
    </NavBar>
  )
}

export default Navbar
