import React, { useState } from 'react'
import { MainContent, Buttons, Choices } from '../../styles/choicesSyles'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import '../../utilities.css'
import usePlayer from '../../hooks/usePlayer'
import useCheckInvestments from '../../hooks/useCheckInvestments'
// import INVESTMENTS_VEHICLES from '../../data/Investments'

const choiceData = {
  year: 2013,
  setup: `The stock market has recently increased. In 2004, you invested 15% of your income in shares of the S & P 500 at $17.18. The S & P 500 is now at $22.19. You do not need your money until 2040.`,
  option1: `Keep all of the funds in the S & P 500 because you have 32 more years until you need your money which you think is plenty of time to withstand ups and downs in the market.`,
  option2: `Sell all of your shares because you are happy with the $5 gain you have made.`,
}

function ChoiceFive() {
  const { dispatch } = usePlayer()
  const addAnnualExpenditures = useCheckInvestments()
  const [choice, setChoice] = useState('')

  const handleSelection = (e) => {
    setChoice(e.target.value)
  }

  const submitSelection = () => {
    const removedInvestment = choice === 'sell' ? 'S&P' : null
    const selection = {
      choice: choice,
      expenditures: addAnnualExpenditures,
      investment: removedInvestment,
    }

    if (choice === 'sell')
      dispatch({
        type: 'REMOVE_INVESTMENT',
        payload: selection,
      })
  }

  return (
    <>
      <MainContent>
        <span>{choiceData.year}</span>
        <h1>Hold or Sell</h1>
        <p>{choiceData.setup}</p>
        <h2>Your Choices</h2>
        <ul>
          <li>
            <p>{choiceData.option1}</p>
          </li>
          <li>
            <p>{choiceData.option2}</p>
          </li>
        </ul>
      </MainContent>
      <Choices>
        <input
          onClick={(e) => handleSelection(e)}
          type="radio"
          name="choice-5"
          id="hold"
          value="hold"
        />
        <label className="button" for="hold">
          <span class="hold">Keep investment in the S&P 500</span>
        </label>

        <input
          onClick={(e) => handleSelection(e)}
          type="radio"
          name="choice-5"
          id="sell"
          value="sell"
        />
        <label className="button" for="sell">
          <span class="sell">Sell your shares</span>
        </label>
      </Choices>
      <hr />
      <Buttons>
        <Link to="/graph-5">
          <Button label="Continue" onClick={submitSelection} />
        </Link>
      </Buttons>
    </>
  )
}

export default ChoiceFive
