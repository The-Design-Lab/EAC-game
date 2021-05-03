import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../components/Button'
import Graph from '../components/Graph'

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`

const Title = styled.h4`
  text-align: center;
`

function GraphOne() {
  return (
    <div>
      <Title>2006 Summary</Title>
      <Graph />
      <Buttons>
        <Link to="/graph-1">
          <Button label="Continue" />
        </Link>
      </Buttons>
    </div>
  )
}

export default GraphOne
