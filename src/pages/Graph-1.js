import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../components/Button'
import Graph from '../components/Graph'

const Title = styled.h4`
  text-align: center;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`

const Investments = styled.aside`
  padding: 0 20px;

  h5 {
    margin-bottom: 20px;
    text-align: center;
  }

  hr {
    margin: 20px 0;
  }
`

const InvestmentName = styled.div`
  box-shadow: var(--bevel-default);
  background: red;
  width: 150px;
  padding: 15px 20px;
  text-align: center;
`
const InvestmentGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`

function GraphOne() {
  return (
    <div>
      <Title>2006 Summary</Title>
      <Grid>
        <Graph />
        <Investments>
          <h5>Investments</h5>
          <hr />
          <InvestmentGroup>
            <InvestmentName>S&P 500</InvestmentName>
            <InvestmentName>CD</InvestmentName>
            <InvestmentName>Insego</InvestmentName>
            <InvestmentName>Mutual Fund</InvestmentName>
          </InvestmentGroup>
        </Investments>
      </Grid>
      <Buttons>
        <Link to="/graph-1">
          <Button label="Continue" />
        </Link>
      </Buttons>
    </div>
  )
}

export default GraphOne
