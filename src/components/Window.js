import React from 'react'
import styled from 'styled-components'
import Home from '../pages/Home'

const WindowWrapper = styled.div`
  max-width: 800px;
  height: 600px;
  box-shadow: var(--bevel-default);
  margin: 0 auto;
  background-color: var(--color-primary);
  padding: 5px;
`

const WindowHead = styled.h5`
  background-color: var(--color-secondary);
  padding: 10px 0;
  width: 100%;
  color: white;
  text-align: center;
`

const Content = styled.div`
  width: 90%;
  margin: 30px auto;
`

function Window({ maxWidth = '1000px' }) {
  return (
    <WindowWrapper style={{ maxWidth }}>
      <WindowHead>Welcome to Economic Awaraness Council</WindowHead>
      <Content>
        {/* Inject dynamic components */}
        <Home />
        {/* End injection */}
      </Content>
    </WindowWrapper>
  )
}

export default Window
