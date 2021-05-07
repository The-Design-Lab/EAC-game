import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../../components/Button'
import Graph from '../../components/graph/Graph'
import { PlayerContext } from '../../contexts/PlayerContext'
import { choice3 } from '../../data/investmentData'
import INVESTMENTS_VEHICLES from '../../data/Investments'

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

function GraphTwo() {
  const { investments } = useContext(PlayerContext)
  console.log(investments)

  return (
    <div>
      <Title>2006 Summary</Title>
      <hr />
      <Grid>
        <Graph data={choice3} />
        <Investments>
          <h5>Investments</h5>
          <hr />
          {/* render condtional investment labels */}
          <InvestmentGroup>
            {investments.includes(INVESTMENTS_VEHICLES.SP) && (
              <InvestmentName style={{ backgroundColor: '#F9BA7F' }}>
                S&P 500
              </InvestmentName>
            )}
            {investments.includes(INVESTMENTS_VEHICLES.retirement) && (
              <InvestmentName style={{ backgroundColor: '#f96263' }}>
                Retirement
              </InvestmentName>
            )}
            {investments.includes(INVESTMENTS_VEHICLES.CD) && (
              <InvestmentName style={{ backgroundColor: '#E6E547' }}>
                CD
              </InvestmentName>
            )}
            {investments.includes(INVESTMENTS_VEHICLES.inveesgo) && (
              <InvestmentName style={{ backgroundColor: '#BBC2FF' }}>
                Insego
              </InvestmentName>
            )}
            {investments.includes(INVESTMENTS_VEHICLES.mutualFund) && (
              <InvestmentName style={{ backgroundColor: '#BBC2FF' }}>
                Mutual Fund
              </InvestmentName>
            )}
          </InvestmentGroup>
        </Investments>
      </Grid>
      <Buttons>
        <Link to="/goals">
          <Button label="Continue" />
        </Link>
      </Buttons>
    </div>
  )
}

export default GraphTwo
