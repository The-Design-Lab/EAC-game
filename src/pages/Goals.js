import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import ChoiceCard from "../components/ChoiceCard";
import { PlayerContext } from "../contexts/PlayerContext";

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
  }
`;
const Buttons = styled.div`
  display: flex;
  justify-content: center;
`;

const GoalChoices = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

function Goals() {
  const { dispatch } = useContext(PlayerContext);
  const resetGoals = () => {
    dispatch({
      type: "RESET",
      payload: "",
    });
    console.log("Successfully reset");
  };

  useEffect(() => {
    resetGoals();
  }, []);

  return (
    <>
      <MainContent>
        <h1>What are your goals?</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <GoalChoices>
          <ChoiceCard />
        </GoalChoices>
      </MainContent>
      <hr />
      <Buttons>
        <Link to="/">
          <Button label="Back" />
        </Link>
        <Link to="/choice-1">
          <Button label="Continue" />
        </Link>
      </Buttons>
    </>
  );
}

export default Goals;
