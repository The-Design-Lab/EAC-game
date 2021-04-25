import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

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
  return (
    <>
      <MainContent>
        <span>Year: 2004</span>
        <h1>Retirement and financial goals</h1>
        <p>
          The US economy grew at an annual rate of 2.86% in 2003, an increase
          from the preceding year. The S&P 500, which fell for three consecutive
          years in 2000-2002, rebounded in 2003 up 26.38% for the year. The
          Schiller PE Ratio increased from 22.9% at the beginning of the year to
          26.64 at year end, indicating that stocks are in an extreme bubble.
        </p>
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
        <Button type="choice" label="Invest in a 401K" />
        <Button type="choice" label="Keep & spend the money" />
      </Choices>
      <hr />
      <Buttons>
        <Link to="/goals">
          <Button label="Back" />
        </Link>
        <Link to="/choice-2">
          <Button label="Continue" />
        </Link>
      </Buttons>
    </>
  )
}

export default ChoiceOne
