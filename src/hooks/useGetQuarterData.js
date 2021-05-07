import { useContext } from 'react'
import { PlayerContext } from '../contexts/PlayerContext'

function useGetQuarterData(...quarterData) {
  const { investments } = useContext(PlayerContext)
  // set number of quarters equal to the number of elements in the first item of the investment array. Since every investment will have the same amount of quarters, it doesn't matter which investment quarters come from
  const quarters = arguments[0]
  const result = []

  // push the same index of each array into a array and add it to the final "data" structure
  for (let i = 0; i < quarters.length; i++) {
    // set each object with a new quarter
    result.push({
      name: `Quarter${i + 1}`,
    })

    // loop through every investment and add quarter data to its respective data array
    investments.forEach((invesment) => {
      // test wheather or not the investment exists, and if if does, hook it up to the correct array of quarter results
      switch (invesment) {
        case 'retirement':
          result[i][invesment] = quarterData[0][i]
          break
        case 'S&P':
          result[i][invesment] = quarterData[1][i]
          break
        case 'CD':
          result[i][invesment] = quarterData[2][i]
          break
        case 'inveesgo':
          result[i][invesment] = quarterData[3][i]
          break
        case 'mutualFund':
          result[i][invesment] = quarterData[4][i]
          break
        default:
          return
      }
    })
  }

  return result
}

export default useGetQuarterData
