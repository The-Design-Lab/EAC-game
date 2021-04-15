import React from 'react'
import styled from 'styled-components'

const handleButtonType = (type) => {
  switch (type) {
    case 'navItem':
      return '24px 96px 24px 16px'
    case 'danger':
      return '#f56342'
    default:
      return '14px 26px'
  }
}

const ButtonStyle = styled.button`
  box-shadow: var(--box-shadow);
  cursor: pointer;
  text-align: center;
  box-shadow: var(--bevel-default);
  background-color: var(--color-primary);
  display: flex;
  height: 80%;
  align-items: center;
  padding: ${({ type }) => handleButtonType(type)};

  &:active {
    box-shadow: var(--bevel-active);
    background-color: var(--color-primary-light);
  }

  &:focus {
    outline: 2px dotted var(--color-secondary);
  }
`

function Button({ label, type }) {
  return <ButtonStyle type={type}>{label}</ButtonStyle>
}

export default Button
