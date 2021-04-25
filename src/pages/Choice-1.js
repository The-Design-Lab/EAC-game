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
  p {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }
`
const Buttons = styled.div`
  display: flex;
  justify-content: center;
`

function ChoiceOne() {
  return (
    <>
      <MainContent>
        <h1>Choice #1 </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vitae
          a cum culpa ipsa, minima assumenda est, illum hic, officiis
          laudantium! Eveniet optio neque soluta fuga cumque tempora quo
          voluptatibus aut delectus commodi, veritatis qui? Quis excepturi
          voluptatem dolore voluptatibus.
        </p>
      </MainContent>
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
