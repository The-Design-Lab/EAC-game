import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Home from '../pages/Home'
import About from '../pages/About'

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
      <Router>
        <Content>
          {/* Inject dynamic components */}
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/" component={Home} />
          </Switch>
          {/* <Home /> */}
          {/* End injection */}
        </Content>
      </Router>
    </WindowWrapper>
  )
}

export default Window
