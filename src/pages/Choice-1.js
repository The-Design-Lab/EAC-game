import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import '../utilities.css'
import { PlayerContext } from '../contexts/PlayerContext'

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

function ChoiceOne() {
  const { dispatch } = useContext(PlayerContext)
  const [choice, setChoice] = useState('')

  // const [gender, setGender] = useState('')

  // const handleChange = (e) => {
  //   setGender(e.target.value)
  // }

  const setSelectedStyles = (e) => {
    setChoice(e.target.value)
  }

  const handleSelect = () => {
    dispatch({
      type: 'SELECT_CHOICE-1',
      payload: choice,
    })
  }

  return (
    <>
      <MainContent>
        <span>Year: 2004</span>
        <h1>Retirement and financial goals</h1>
        <h2>Your Choices</h2>
        <ul>
          <li>
            <p>
              Invest 10% into a 401k with a match of 5% (of annual income). All
              of the funds 15% will be invested in the S&P 500 throughout the
              game unless the player makes a change.
            </p>
          </li>
          <li>
            <p>
              Keep the money and spend it. Maybe choose between swanky apartment
              and used car with no investments vs. studio apt. and take public
              transportation with investment
            </p>
          </li>
        </ul>
      </MainContent>
      <Choices>
        {/* <Button
          onClick={(e) => setSelectedStyles(e)}
          // style={{
          //   fontSize: setStyle ? '30px !important' : '10px !important',
          // }}
          type="choice"
          label="Invest in a 401K"
        />
        <Button
          onClick={(e) => setSelectedStyles(e)}
          type="choice"
          label="Keep & spend the money"
        /> */}

        <input
          onClick={(e) => setSelectedStyles(e)}
          type="radio"
          name="choice-1"
          id="invest"
          value="invest"
        />
        <label className="button" for="invest">
          <span class="invest">Invest in 401K</span>
        </label>

        <input
          onClick={(e) => setSelectedStyles(e)}
          type="radio"
          name="choice-1"
          id="spend"
          value="spend"
        />
        <label className="button" for="spend">
          <span class="spend">Keep & spend the money</span>
        </label>

        {/* <label for="male">Male</label>
        <input
          type="radio"
          value="male"
          id="male"
          onChange={handleChange}
          name="gender"
        />

        <label for="female">Female</label>
        <input
          type="radio"
          value="female"
          id="female"
          onChange={handleChange}
          name="gender"
        /> */}

        {/* <p>You gender is {gender}</p> */}
      </Choices>
      <hr />
      <Buttons>
        <Link to="/choice-2">
          <Button label="Continue" onClick={handleSelect} />
        </Link>
      </Buttons>
    </>
  )
}

export default ChoiceOne
