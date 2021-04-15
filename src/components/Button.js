import React from 'react'
import styled from 'styled-components'

// Button variants
const buttonType = {
  navItem: {
    padding: '24px 96px 24px 16px',
    active: {
      background: 'red',
    },
  },
  default: {
    padding: '24px 16px',
  },
}

// Icon images
const icons = {
  book: './icons/dictionary.png',
  windows: './icons/windows.png',
  bank: './icons/bank.png',
}

// Style icon
const Icon = styled.img`
  background: none;
  margin-right: 10px;
  height: 32px;
  width: 32px;
`

// Base button style
const ButtonStyle = styled.button`
  box-shadow: var(--box-shadow);
  cursor: pointer;
  text-align: center;
  box-shadow: var(--bevel-default);
  background-color: var(--color-primary);
  display: flex;
  height: 80%;
  align-items: center;

  // Change button variant based on button
  ${(type) => {
    switch (type.buttonType) {
      case 'navItem':
        return `
          padding: ${buttonType.navItem.padding};
        `
      default:
        return `
          padding: ${buttonType.default.padding};
        `
    }
  }}

  &:active {
    box-shadow: var(--bevel-active);
    background-color: var(--color-primary-light);
  }

  &:focus {
    outline: 2px dotted var(--color-secondary);
  }
`
// set icon if necessary
const setIcon = (icon) => {
  if (icon) return <Icon src={icons[icon]} alt={icon} />
}

function Button({ label, type, icon }) {
  return (
    <ButtonStyle buttonType={type}>
      {setIcon(icon)}
      {label}
    </ButtonStyle>
  )
}

export default Button
