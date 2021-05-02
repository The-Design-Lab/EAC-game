import React, { useContext } from 'react'
import { PlayerContext } from '../contexts/PlayerContext'
import styled from 'styled-components'

const MarketStyles = styled.div`
  h5 {
    font-weight: 700;
    margin-bottom: 10px;
  }

  span {
    font-weight: 700;
    margin-bottom: 5px;
    display: block;
  }
`

const marketData = [
  {
    year: 2006,
    description:
      'The US economy grew at an annual rate of 2.86% in 2003, an increase from the preceding year. The S&P 500, which fell for three consecutive years in 2000-2002, rebounded in 2003 up 26.38% for the year. The Schiller PE Ratio increased from 22.9% at the beginning of the year to 26.64 at year end, indicating that stocks are in an extreme bubble.',
  },
  {
    year: 2007,
    description:
      'After making money at their job, the player decides to save some of their earnings for emergencies.',
  },
]

function Market() {
  const { choices } = useContext(PlayerContext)

  const SwitchMarketNews = () => {
    return (
      <>
        <span>Year:{marketData[choices.length].year}</span>
        <p>{marketData[choices.length].description}</p>
      </>
    )
  }

  return (
    <MarketStyles>
      <h5>Market News</h5>
      <SwitchMarketNews />
    </MarketStyles>
  )
}

export default Market
