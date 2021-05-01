import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Home from '../pages/Home'
import Goals from '../pages/Goals'
import ChoiceOne from '../pages/Choice-1'

const WindowWrapper = styled.div`
  max-height: 800px; // height for home page
  overflow: scroll;
  box-shadow: var(--bevel-default);
  margin: 0 auto;
  background-color: var(--color-primary);
  padding: 5px;
  /* margin-bottom: 58px; */
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

function Window({ maxWidth = '1200px' }) {
  return (
    <WindowWrapper style={{ maxWidth }}>
      <WindowHead>Welcome to Economic Awaraness Council</WindowHead>
      <Router>
        <Content>
          {/* Inject dynamic components */}
          <Switch>
            <Route path="/choice-1" name="Choice-1" component={ChoiceOne} />
            <Route path="/goals" name="Home" component={Goals} />
            <Route path="/" component={Home} />
          </Switch>
          {/* End injection */}
        </Content>
      </Router>
    </WindowWrapper>
  )
}

export default Window
