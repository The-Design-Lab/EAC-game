import React, { useState, useEffect } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Home from '../pages/Home'
import Goals from '../pages/Goals'
import ChoiceOne from '../pages/Choice-1'
import GraphOne from '../pages/Graph-1'

const WindowWrapper = styled.div`
  max-height: 700px; // height for home page
  overflow: scroll;
  /* width: 800px; */
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
  margin: 15px auto;
`

// const useSetWidth = () => {
//   const [width, setWidth] = useState('')
//   let smWidth = '800px'
//   let lgWidth = '1200px'
//   let pathname = window.location.pathname

//   useEffect(() => {
//     if (pathname === '/') {
//       console.log(pathname)
//       setWidth(smWidth)
//       return width
//     } else {
//       console.log(pathname)
//       setWidth(lgWidth)
//       return width
//     }
//   }, [width, pathname, smWidth, lgWidth])
// }

function Window() {
  const [width, setWidth] = useState('')
  let smWidth = '800px'
  let lgWidth = '1200px'
  let pathname = window.location.pathname

  useEffect(() => {
    if (pathname === '/') {
      console.log(pathname)
      setWidth(smWidth)
      return width
    } else {
      console.log(pathname)
      setWidth(lgWidth)
      return width
    }
  }, [width, pathname, smWidth, lgWidth])
  
  return (
    <WindowWrapper style={{ width: width }}>
      <WindowHead>Welcome to Economic Awaraness Council</WindowHead>
      <Router>
        <Content>
          {/* Inject dynamic components */}
          <Switch>
            <Route path="/graph-1" name="Graph-1" component={GraphOne} />
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
