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
  choice: {
    padding: '10px 26px',
    width: '200px',
    height: '65px',
    backgroundColor: 'var(--color-tertiary)',
    active: {
      background: 'red',
    },
  },
  default: {
    padding: '10px 26px',
    width: '120px',
  },
}

// Icon images
const icons = {
  book: './icons/dictionary.png',
  windows: './icons/windows.png',
  bank: './icons/bank.png',
  market: './icons/market.png',
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
  display: flex;
  align-items: center;
  box-shadow: var(--box-shadow);
  cursor: pointer;
  justify-content: center;
  box-shadow: var(--bevel-default);
  background-color: var(--color-primary);
  height: 80%;

  // Change button variant based on button
  ${(type) => {
    switch (type.buttonType) {
      case 'navItem':
        return `
          padding: ${buttonType.navItem.padding};
        `
      case 'choice':
        return `
          padding: ${buttonType.choice.padding};
          width: ${buttonType.choice.width};
          height: ${buttonType.choice.height};
          background-color: ${buttonType.choice.backgroundColor};
        `
      default:
        return `
          padding: ${buttonType.default.padding};
          width: ${buttonType.default.width};
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

function Button({ label, type = 'default', icon, onClick }) {
  return (
    <ButtonStyle buttonType={type} onClick={onClick}>
      {setIcon(icon)}
      {label}
    </ButtonStyle>
  )
}

export default Button
