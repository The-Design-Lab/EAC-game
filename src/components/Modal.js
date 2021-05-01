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
  max-width: 500px;
  min-width: 400px;
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

const DefinitionList = styled.dl`
  lh {
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 10px;
    display: block;
  }
  dt {
    font-weight: 700;
  }
  dd {
    margin-left: 10px;
  }
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

        if (context.showDictionaryModal) {
          return (
            <Draggable handle="#handle">
              <WindowWrapper>
                <WindowHead id="handle">
                  {title}
                  <CloseBtn onClick={context.toggleDictionaryModal}>X</CloseBtn>
                </WindowHead>
                <Content>
                  <DefinitionList>
                    <lh>Definitions</lh>
                    <dt>401K</dt>
                    <dd>
                      A 401(k) plan is a tax-advantaged, defined-contribution
                      retirement account offered by many employers to their
                      employees. It is named after a section of the U.S.
                      Internal Revenue Code. Workers can make contributions to
                      their 401(k) accounts through automatic payroll
                      withholding, and their employers can match some or all of
                      those contributions. The investment earnings in a
                      traditional 401(k) plan are not taxed until the employee
                      withdraws that money, typically after retirement. In a
                      Roth 401(k) plan, withdrawals can be tax-free.
                    </dd>
                  </DefinitionList>
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
