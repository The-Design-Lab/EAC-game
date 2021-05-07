import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import '../../utilities.css'
import usePlayer from '../../hooks/usePlayer'

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
  year: 2005,
  option1: `You know how important emergency savings is so you save $2,000 and deposit this in a special savings account which is just for emergencies. `,
  option2: `What can go wrong when you are a young adult? You decide you don’t need emergency savings and you use the $2,000 extra in your budget over the year to pay to upgrade your really old, used car to a nicer, used car. `,
}

function ChoiceTwo() {
  const { salary, investments, dispatch } = usePlayer()
  const [choice, setChoice] = useState('')

  // check if user saves for retirement and add it to their yearly expenditures
  const addRetirement = investments.includes('retirement') ? -6000 : 0

  // check how much the player invests in a 401k
  let add401K = investments.includes('S&P') ? -(salary * 0.1) : -(salary * 0.02)

  const handleSelection = (e) => {
    setChoice(e.target.value)
  }

  const submitSelection = () => {
    const selection = {
      choice: choice,
    }

    let CD,
      addBuyNewCar = -2000
    if (choice === 'invest') {
      selection.investment = 'CD'
      selection.expenditures = addRetirement + add401K + CD
    } else {
      selection.expenditures = addRetirement + add401K + addBuyNewCar
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
        <h1>CDs and Emergency Savings</h1>
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
          <span class="invest">Invest in CD</span>
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
        <Link to="/graph-2">
          <Button label="Continue" onClick={submitSelection} />
        </Link>
      </Buttons>
    </>
  )
}

export default ChoiceTwo
