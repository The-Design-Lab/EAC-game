import { useContext } from 'react'
import { PlayerContext } from '../contexts/PlayerContext'

function useGetQuarterData(SP, retirement, CD) {
  const { investments } = useContext(PlayerContext)
  console.log(investments)

  const result = []

  for (let i = 0; i < retirement.length; i++) {
    result.push({
      name: `Day${i + 1}`,
      'S&P': SP[i],
      retirement: retirement[i],
      CD: CD[i],
    })
  }

  return result
}

// console.log(useGetQuarterData(SP, retirement, CD))

export default useGetQuarterData
