import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Home from '../pages/Home'
import Goals from '../pages/Goals'
import ChoiceOne from '../pages/Choice-1/Choice-1'
import GraphOne from '../pages/Choice-1/Graph-1'
import ChoiceTwo from '../pages/Choice-2/Choice-2'
import GraphTwo from '../pages/Choice-2/Graph-2'
import ChoiceThree from '../pages/Choice-3/Choice-3'
import GraphThree from '../pages/Choice-3/Graph-3'
import device from '../styles/mediaQueries'

const WindowWrapper = styled.div`
  max-height: 700px; // height for home page
  width: 1200px;
  overflow: scroll;
  box-shadow: var(--bevel-default);
  margin: 0 auto;
  background-color: var(--color-primary);
  padding: 5px;

  @media ${device.desktop} {
    max-height: 850px;
  }
  @media ${device.laptopL} {
    max-height: 700px;
  }
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
  margin: 15px auto;
`

function Window() {
  return (
    <WindowWrapper>
      <WindowHead>Welcome to Economic Awaraness Council</WindowHead>
      <Router>
        <Content>
          {/* Inject dynamic components */}
          <Switch>
            <Route path="/graph-3" name="Graph-3" component={GraphThree} />
            <Route path="/choice-3" name="Graph-3" component={ChoiceThree} />
            <Route path="/graph-2" name="Graph-2" component={GraphTwo} />
            <Route path="/choice-2" name="Graph-2" component={ChoiceTwo} />
            <Route path="/graph-1" name="Graph-1" component={GraphOne} />
            <Route path="/choice-1" name="Choice-1" component={ChoiceOne} />
            <Route path="/goals" name="Home" component={Goals} />
            <Route path="/" exact component={Home} />
          </Switch>
          {/* End injection */}
        </Content>
      </Router>
    </WindowWrapper>
  )
}

export default Window
