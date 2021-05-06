import { useContext } from 'react'
import { PlayerContext } from '../contexts/PlayerContext'

function useGetQuarterData(...args) {
  const { investments } = useContext(PlayerContext)
  // set number of quarters equal to the number of elements in the first item of the investment array. Since every investment will have the same amount of quarters, it doesn't matter which investment quarters come from
  const quarters = arguments[0]
  console.log(investments[0])

  const result = []

  // push the same index of each array into a array and add it to the final "data" structure
  for (let i = 0; i < quarters.length; i++) {
    // set each object with a new quarter 
    result.push({
      name: `Quarter${i + 1}`,
    })

    // loop through every investment and add quarter data
    investments.forEach((invesment, index) => {
      result[i][invesment] = args[index][i]
    })
  }

  console.log(result)
  return result
}

export default useGetQuarterData
