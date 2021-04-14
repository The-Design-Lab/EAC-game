import React from 'react'
import styled from 'styled-components'

const LinkStyle = styled.span`
  padding: 24px 16px;
  box-shadow: var(--box-shadow);
  cursor: pointer;
  text-align: center;
  box-shadow: var(--bevel-default);
  background-color: var(--color-primary);
  height: 80%;
  display: flex;
  align-items: center;

  &:active {
    box-shadow: var(--bevel-active);
    background-color: var(--color-primary-light);
  }

  // props
  /* background: ${(props) => props.bgColor || 'var(--orange)'}; */
`

function Button({ label }) {
  return <LinkStyle>{label}</LinkStyle>
}

export default Button
