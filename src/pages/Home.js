import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'

const HomeContent = styled.div`
  display: flex;
  flex-direction: column;

  img {
    object-fit: cover;
    max-width: 180px;
  }

  ul {
    margin-top: 20px;
    margin-left: 30px;
  }
`

const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
`
const Buttons = styled.div`
  display: flex;
  justify-content: center;
`

function Home() {
  return (
    <HomeContent>
      <MainContent>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe6BUmB0VWV1tEu82L1tTqUEoOSyHhIZXIUg&usqp=CAU"
          alt="Home graphic"
        />
        <div>
          <h1>Investor Simulator </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>Over the course of the following game, you will learn about:</p>
          <ul>
            <li>How to invest</li>
            <li>Risk & Rewards</li>
            <li>Retirement Funds</li>
          </ul>
        </div>
      </MainContent>
      <hr />
      <Buttons>
        <Button label="Play" />
      </Buttons>
    </HomeContent>
  )
}

export default Home
