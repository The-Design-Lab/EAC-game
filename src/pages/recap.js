import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";
import ChoiceCard from "../components/ChoiceCard";

function Recap() {
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

  const GoalChoices = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  `;

  const Buttons = styled.div`
    display: flex;
    justify-content: center;
  `;
  return (
    <>
      <MainContent>
        <GoalChoices>
          {/* insert logic so it only shows goals selected at the beginning */}
          {/* insert logic that highlights goals green if achieved and red if not */}
          <ChoiceCard />
        </GoalChoices>
      </MainContent>
      <hr />
      <Buttons>
        <Link to="/summary">
          <Button label="Continue" />
        </Link>
      </Buttons>
    </>
  );
}

export default Recap;
