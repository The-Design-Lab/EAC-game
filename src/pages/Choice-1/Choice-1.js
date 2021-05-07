import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import '../../utilities.css'
import usePlayer from '../../hooks/usePlayer'
import useCheckInvestments from '../../hooks/useCheckInvestments'
import INVESTMENTS_VEHICLES from '../../data/Investments'

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  h1 {
    text-align: center;
    font-family: var(--body);
    font-weight: 400;
  }
  h2 {
    font-size: 36px;
    max-width: 800px;
    margin: 0 auto;
  }

  p {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }

  ul {
    max-width: 800px;
    margin: 0 auto;
    list-style: center;

    li {
      margin-bottom: 25px;
      list-style-type: decimal;

      p {
        text-align: left;
      }
    }
  }
`
const Buttons = styled.div`
  display: flex;
  justify-content: center;
`
const Choices = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 50px;

  button {
    font-weight: 700;
  }
`

const choiceData = {
  year: 2004,
  option1: ` Invest 10% into a 401k with a match of 5% (of annual income). All
  of the funds 15% will be invested in the S&P 500 throughout the
  game unless the player makes a change.`,
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
