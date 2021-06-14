import React, { useState } from 'react'
import { MainContent, Buttons, Choices } from '../../styles/choicesSyles'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import '../../utilities.css'
import usePlayer from '../../hooks/usePlayer'
import useCheckInvestments from '../../hooks/useCheckInvestments'
import INVESTMENTS_VEHICLES from '../../data/Investments'

const choiceData = {
  year: 2004,
  setup: `Congrats! Your employer has a benefits program to help workers invest for their retirement. Your employer allows you to invest funds into a 401k up to 10% of your salary with a match of 50% of your investment. You have two choices.`,
  option1: `You know how important investing is and you choose to get a small studio apartment so that you can afford to invest 10% of your salary into a 401k with a match of 5% (of your annual income). All of the funds, 15% of your total salary, will be invested in the S&P 500 index fund throughout the game.`,
  option2: `Keep the money and spend it. Maybe choose between swanky apartment
  and used car with no investments vs. studio apt. and take public
  transportation with investment
`,
}

function ChoiceOne() {
  const { salary, dispatch } = usePlayer()
  const addAnnualExpenditures = useCheckInvestments()
  const [choice, setChoice] = useState('')

  // set choice value to selected choice in UI
  const handleSelection = (e) => setChoice(e.target.value)

  // send selection data to the global player object
  const submitSelection = () => {
    const selection = {
      choice: choice,
    }
    let SPPercentage
    if (choice === 'invest') {
      SPPercentage = 0.1
      selection.investment = INVESTMENTS_VEHICLES.SP
      selection.expenditures = -(salary * SPPercentage) + addAnnualExpenditures
    } else {
      SPPercentage = 0.02
      selection.investment = 'spend'
      selection.expenditures = -(salary * SPPercentage) + addAnnualExpenditures
    }

    dispatch({
      type: 'SELECT_CHOICE',
      payload: selection,
    })
  }

  return (
    <>
      <MainContent>
        <span>{choiceData.year}</span>
        <h1>Retirement and financial goals</h1>
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
          name="choice-1"
          id="invest"
          value="invest"
        />
        <label className="button" for="invest">
          <span class="invest">Invest in 401K</span>
        </label>

        <input
          onClick={(e) => handleSelection(e)}
          type="radio"
          name="choice-1"
          id="spend"
          value="spend"
        />
        <label className="button" for="spend">
          <span class="spend">Keep & spend the money</span>
        </label>
      </Choices>
      <hr />
      <Buttons>
        <Link to="/graph-1">
          <Button label="Continue" onClick={submitSelection} />
        </Link>
      </Buttons>
    </>
  )
}

export default ChoiceOne
