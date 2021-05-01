import React, { useContext } from 'react'
import Draggable from 'react-draggable'
import { ModalContext } from '../contexts/ModalContext'
import { PlayerContext } from '../contexts/PlayerContext'
import styled from 'styled-components'

const WindowWrapper = styled.div`
  position: fixed;
  top: 30%;
  left: 30%;
  transform: translate(-50%, -50%);
  min-width: 500px;
  min-height: 400px;
  overflow: scroll;
  box-shadow: var(--bevel-default);
  margin: 0 auto;
  background-color: var(--color-primary);
  padding: 5px;
`

const WindowHead = styled.h5`
  background-color: var(--color-secondary);
  padding: 10px;
  width: 100%;
  color: white;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Content = styled.div`
  width: 90%;
  margin: 30px auto;
`

const CloseBtn = styled.button`
  background-color: var(--color-primary);
  padding: 0 3px;
  height: min-content;
  cursor: pointer;
`

const Modal = ({ title }) => {
  const { bank } = useContext(PlayerContext)

  return (
    <ModalContext.Consumer>
      {(context) => {
        if (context.showModal) {
          return (
            <Draggable handle="#handle">
              <WindowWrapper>
                <WindowHead id="handle">
                  {title}
                  <CloseBtn onClick={context.toggleBankModal}>X</CloseBtn>
                </WindowHead>
                <Content>
                  <p>Account Balance: ${bank}</p>
                </Content>
              </WindowWrapper>
            </Draggable>
          )
        }

        return null
      }}
    </ModalContext.Consumer>
  )
}

export default Modal
