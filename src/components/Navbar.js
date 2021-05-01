import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import DateTime from './Clock'

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 58px;
  background-color: var(--color-primary);
  box-shadow: var(--bevel-default);
  padding: 10px 5px;
`

const Buttons = styled.div`
  display: flex;
  align-items: center;
  height: 54px;
`

function Navbar() {
  return (
    <NavBar>
      <Buttons>
        <Button type="navItem" label="Game" icon="windows" />
        <Button type="navItem" label="Dictionary" icon="book" />
        <Button type="navItem" label="Bank" icon="bank" />
      </Buttons>
      <DateTime />
    </NavBar>
  )
}

export default Navbar
