import React, { useState } from 'react'
import { MainContent, Buttons, Choices } from '../../styles/choicesSyles'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import '../../utilities.css'
import usePlayer from '../../hooks/usePlayer'
import useCheckInvestments from '../../hooks/useCheckInvestments'
// import INVESTMENTS_VEHICLES from '../../data/Investments'

const choiceData = {
  year: 2009,
  option1: `Keep all of the funds in the S & P 500 because you have 36 more years until you need your money.`,
  option2: `Sell all of your shares because you are concerned the S & P 500 will continue to go down.`,
}

function ChoiceTwo() {
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
          name="choice-4"
          id="hold"
          value="hold"
        />
        <label className="button" for="hold">
          <span class="hold">Keep investment in the S&P 500</span>
        </label>

        <input
          onClick={(e) => handleSelection(e)}
          type="radio"
          name="choice-4"
          id="sell"
          value="sell"
        />
        <label className="button" for="sell">
          <span class="sell">Sell your shares</span>
        </label>
      </Choices>
      <hr />
      <Buttons>
        <Link to="/graph-4">
          <Button label="Continue" onClick={submitSelection} />
        </Link>
      </Buttons>
    </>
  )
}

export default ChoiceTwo
