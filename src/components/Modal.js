import React from 'react'
import Draggable from 'react-draggable'
import { ModalContext } from '../contexts/ModalContext'
import styled from 'styled-components'
import Dictionary from './Dictionary'
import Bank from './Bank'
import Market from './Market'

const WindowWrapper = styled.div`
  position: fixed;
  top: 30%;
  left: 30%;
  transform: translate(-50%, -50%);
  max-width: 500px;
  min-width: 400px;
  max-height: 600px;
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
  // set head to top of window
  position: sticky;
  top: 0;
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
  return (
    <ModalContext.Consumer>
      {(context) => {
        if (context.showModal) {
          return (
            <Draggable
              handle="#handle"
              defaultPosition={{
                x: Math.floor(Math.random() * 10) + 200,
                y: Math.floor(Math.random() * 10) - 200,
              }}
            >
              <WindowWrapper>
                <WindowHead id="handle">
                  {title}
                  <CloseBtn onClick={context.toggleBankModal}>x</CloseBtn>
                </WindowHead>
                <Content>
                  <Bank />
                </Content>
              </WindowWrapper>
            </Draggable>
          )
        }

        if (context.showDictionaryModal) {
          return (
            <Draggable handle="#handle">
              <WindowWrapper>
                <WindowHead id="handle">
                  {title}
                  <CloseBtn onClick={context.toggleDictionaryModal}>X</CloseBtn>
                </WindowHead>
                <Content>
                  <Dictionary />
                </Content>
              </WindowWrapper>
            </Draggable>
          )
        }

        if (context.showMarketModal) {
          return (
            <Draggable handle="#handle">
              <WindowWrapper>
                <WindowHead id="handle">
                  {title}
                  <CloseBtn onClick={context.toggleMarketModal}>X</CloseBtn>
                </WindowHead>
                <Content>
                  <Market />
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
