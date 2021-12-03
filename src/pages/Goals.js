import React, { useContext, useEffect, useState } from "react";
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

  const [goalSelected, setGoalSelected] = useState(false);

  useEffect(() => {
    const resetGoals = () => {
      dispatch({
        type: "RESET",
        payload: "",
      });
    };
    resetGoals();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log(goalSelected);
  }, [goalSelected]);

  return (
    <>
      <MainContent>
        <h1>What are your goals?</h1>
        <p>
          Everyone wants something different out of life. What is important to
          you? Choose a few things you are willing to save and make sacrifices
          for, then play the game and let see what you can achieve! Be sure to
          consider the total cost of your goals as this will be a factor in
          whether or not you are successful in reaching these goals.
          <b>
            {" "}
            (If you select too many, costly goals, you may not have enough funds
            to reach these.)
          </b>
        </p>

        <GoalChoices>
          <ChoiceCard setGoalSelected={setGoalSelected} />
        </GoalChoices>
      </MainContent>
      <hr />
      <Buttons>
        <Link to="/">
          <Button label="Back" />
        </Link>
        <Link to="/choice-1">
          {goalSelected ? <Button label="Continue" /> : <></>}
        </Link>
      </Buttons>
    </>
  );
}

export default Goals;
