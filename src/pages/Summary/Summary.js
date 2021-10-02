import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";

function Summary() {
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
      {/* Is there a way to instead of having several pages change the content dynamically when the next is pressed?  */}
      <MainContent>
        <h1>Header</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </MainContent>
      <hr />
      <Buttons>
        <Link to="/recap">
          <Button label="Back" />
        </Link>
        <Link to="/Goals">
          <Button label="Continue" />
        </Link>
      </Buttons>
    </>
  );
}

export default Summary;
