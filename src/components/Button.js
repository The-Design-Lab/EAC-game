import React from 'react'
import styled from 'styled-components'

const handlePaddingType = (padding) => {
  switch (padding) {
    case 'primary':
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
  padding: 24px 14px;
  padding: ${({ padding }) => handlePaddingType(padding)};

  &:active {
    box-shadow: var(--bevel-active);
    background-color: var(--color-primary-light);
  }
`

function Button({ label, padding }) {
  return <ButtonStyle padding={padding}>{label}</ButtonStyle>
}

export default Button
