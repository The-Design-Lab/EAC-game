import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const WindowWrapper = styled.div`
  max-width: 800px;
  height: 600px;
  box-shadow: var(--bevel-default);
  margin: 0 auto;
  background-color: var(--color-primary);
  padding: 5px;
`

const WindowHead = styled.h5`
  background-color: var(--color-secondary);
  padding: 10px 0;
  width: 100%;
  color: white;
  text-align: center;
`

const Content = styled.div`
  width: 90%;
  margin: 30px auto;
`

const Buttons = styled.div`
  display: flex;
  justify-content: center;
`

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

function Window({ maxWidth = '1000px' }) {
  return (
    <WindowWrapper style={{ maxWidth }}>
      <WindowHead>Welcome to Economic Awaraness Council</WindowHead>
      <Content>
        {/* Injected dynamic components */}
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
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Over the course of the following game, you will learn about:
              </p>
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
        {/* End injection */}
      </Content>
    </WindowWrapper>
  )
}

export default Window
