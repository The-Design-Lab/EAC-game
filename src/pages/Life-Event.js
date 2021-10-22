import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import styled from "styled-components";
import { events } from "../data/event-list";

function LifeEvent(props) {
  console.log(props.match.params.num);
  const event = events[props.match.params.num];
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

  return (
    <>
      <MainContent>
        <h1>{event.name}</h1>
        <img src={""} alt="Name of the life event" />
        <p>{event.description}</p>
      </MainContent>
      <hr />
      <Buttons>
        <Link to="/choice-2">
          <Button label="Back" />
        </Link>
        <Link to="/choice-3">
          <Button label="Continue" />
        </Link>
      </Buttons>
    </>
  );
}

export default LifeEvent;
