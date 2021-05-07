import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import '../../utilities.css'
import { PlayerContext } from '../../contexts/PlayerContext'

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
  year: 2006,
  option1: `You invest the money in stock in a small company, Invesgo, that has high risk but recently has shown potential for a high return. Invesgo’s stock price has increased from $6.01 to $13.1 in the years 2004 - 2006 with a high of $19.25 during that time.`,
  option2: `Invest the $2,000 in a growth mutual fund so that you can continue to diversify. You decide to invest in a growth mutual fund that has had a price increase from $5.14 per share to $6.97 per share from 2004-2006.`,
}

function ChoiceTwo() {
  const { salary, investments, dispatch } = useContext(PlayerContext)
  const [choice, setChoice] = useState('')

  // check if user saves for retirement and add it to their yearly expenditures
  let addRetirement
  investments.includes('retirement')
    ? (addRetirement = -6000)
    : (addRetirement = 0)

  // check how much the player invests in a 401k
  let add401K
  investments.includes('S&P')
    ? (add401K = -(salary * 0.1))
    : (add401K = -(salary * 0.02))

  const handleSelection = (e) => {
    setChoice(e.target.value)
  }

  const submitSelection = () => {
    const selection = {
      choice: choice,
    }

    let CD = -2000
    if (choice === 'invest') {
      selection.investment = 'CD'
      selection.expenditures = addRetirement + add401K + CD
    } else {
      selection.investment = 'spend'
      selection.expenditures = addRetirement + add401K
    }

    dispatch({
      type: 'SELECT_CHOICE-2',
      payload: selection,
    })
  }

  return (
    <>
      <MainContent>
        <span>{choiceData.year}</span>
        <h1>Individual stocks</h1>
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
          <span class="invest">Invest in Invesgo</span>
        </label>

        <input
          onClick={(e) => handleSelection(e)}
          type="radio"
          name="choice-1"
          id="spend"
          value="spend"
        />
        <label className="button" for="spend">
          <span class="spend">Invest in a mutual fund</span>
        </label>
      </Choices>
      <hr />
      <Buttons>
        <Link to="/graph-2">
          <Button label="Continue" onClick={submitSelection} />
        </Link>
      </Buttons>
    </>
  )
}

export default ChoiceTwo