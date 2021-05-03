import React, { useContext } from 'react'
import { PlayerContext } from '../contexts/PlayerContext'
import styled from 'styled-components'

const Investment = styled.p`
  margin-bottom: 5px;
`

function Bank() {
  const { bank, investments } = useContext(PlayerContext)

  const investmentPortfolio = [
    { name: 'Retirement', amount: 6000 },
    { name: 'S&P', amount: 6500 },
    { name: 'CD', amount: 2000 },
    { name: 'Insego', amount: 6500 },
    { name: 'Mutual Fund', amount: 2000 },
  ]

  return (
    <div>
      <h5>Accounts:</h5>
      <p>Total Balance: ${bank}</p>
      <hr />
      <h5>Investments:</h5>
      <Investment>
        {investmentPortfolio[0].name}: ${investmentPortfolio[0].amount}/year
      </Investment>
      <Investment>
        {investments[0] === 'S&P'
          ? `${investmentPortfolio[1].name}: $${investmentPortfolio[1].amount}/year`
          : null}
      </Investment>
    </div>
  )
}

export default Bank
