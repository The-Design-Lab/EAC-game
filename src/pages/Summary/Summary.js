import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";
import usePlayer from "../../hooks/usePlayer";
import { formatter } from "../../formatter";

function Summary() {
  const player = usePlayer();
  let total = 0;
  console.log(player);
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
        <h1>Did You Achieve Your Goals?</h1>
        <p>You ended up with {formatter.format(player.bank)}</p>
        <p>
          Your goals were:{" "}
          {player.goals.map((goal) => {
            total = total + parseInt(goal.price);
            return (
              <ul>
                <li>
                  {goal.name}: {formatter.format(goal.price)}
                </li>
              </ul>
            );
          })}
        </p>
        <p>
          Total: <b>{formatter.format(total)}</b>
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
