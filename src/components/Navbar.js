import React, { useState } from 'react'
import styled from 'styled-components'
import Button from './Button'
import DateTime from './Clock'
import Modal from './Modal'
import { ModalContext } from '../contexts/ModalContext'

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
  const [showModal, updateShowModal] = useState(false)
  const toggleBankModal = () => updateShowModal((state) => !state)

  const [showDictionaryModal, updateShowDictionaryModal] = useState(false)
  const toggleDictionaryModal = () =>
    updateShowDictionaryModal((state) => !state)

  return (
    <NavBar>
      <Buttons>
        {/* Modals */}
        <ModalContext.Provider value={{ showModal, toggleBankModal }}>
          <Modal
            title="The Bank"
            canShow={showModal}
            updateModalState={toggleBankModal}
          />
        </ModalContext.Provider>

        <ModalContext.Provider
          value={{ showDictionaryModal, toggleDictionaryModal }}
        >
          <Modal
            title="Dictionary"
            canShow={showDictionaryModal}
            updateModalState={toggleDictionaryModal}
          />
        </ModalContext.Provider>

        {/* Buttons */}
        <Button type="navItem" label="Game" icon="windows" />
        <Button
          onClick={toggleDictionaryModal}
          type="navItem"
          label="Dictionary"
          icon="book"
        />

        <Button
          onClick={toggleBankModal}
          type="navItem"
          label="Bank"
          icon="bank"
        />
        <Button type="navItem" label="Financial Market" icon="market" />
      </Buttons>
      <DateTime />
    </NavBar>
  )
}

export default Navbar
