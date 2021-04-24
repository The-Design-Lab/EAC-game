import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// import Button from '../components/Button'

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
        <h1>About</h1>
      </MainContent>
      <hr />
      <Buttons>
        {/* <Link to="/about">About</Link> */}
        {/* <Button label="Play" /> */}
      </Buttons>
    </HomeContent>
  )
}

export default Home
