import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../components/Button'
import Graph from '../components/graph/Graph'
import { PlayerContext } from '../contexts/PlayerContext'
import { choice1 } from '../data/investmentData'

const Title = styled.h4`
  text-align: center;
  margin-bottom: 20px;
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
  const { investments } = useContext(PlayerContext)
  console.log(investments)

  return (
    <div>
      <Title>2006 Summary</Title>
      <hr />
      <Grid>
        <Graph data={choice1} />
        <Investments>
          <h5>Investments</h5>
          <hr />
          {/* render condtional investment labels */}
          <InvestmentGroup>
            {investments.includes('S&P') && (
              <InvestmentName style={{ backgroundColor: '#f96263' }}>
                S&P 500
              </InvestmentName>
            )}
            {investments.includes('retirement') && (
              <InvestmentName style={{ backgroundColor: '#F9BA7F' }}>
                Retirement
              </InvestmentName>
            )}
          </InvestmentGroup>
        </Investments>
      </Grid>
      <Buttons>
        <Link to="/choice-2">
          <Button label="Continue" />
        </Link>
      </Buttons>
    </div>
  )
}

export default GraphOne
