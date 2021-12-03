import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../components/Button";

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
`;

const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
`;
const Buttons = styled.div`
  display: flex;
  justify-content: center;
`;

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
            Investing may help you to build wealth and meet financial goals.
            There are many opportunities, alternatives and risks associated with
            investing. The year is 2006, and you are just about to start your
            adult life. It’s time to get smart and start investing part of your
            salary and setting some financial goals. Play this game and see if
            you can achieve your financial goals and get set up for future
            success!
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
        <Link to="/goals">
          <Button label="Play" />
        </Link>
      </Buttons>
    </HomeContent>
  );
}

export default Home;
