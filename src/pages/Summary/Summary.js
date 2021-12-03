import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";
import usePlayer from "../../hooks/usePlayer";
import { formatter } from "../../formatter";
import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} from "unique-names-generator";
import scoresRef from "../../data/firebase";

function Summary() {
  const player = usePlayer();
  let total = 0;
  let goalsTotalAmount = 0;
  const date = Date.now();
  const now = new Date(date);
  const name = uniqueNamesGenerator({
    dictionaries: [adjectives, colors, animals],
  });

  const [didWin, setDidWin] = useState(null);

  useEffect(() => {
    player.goals.forEach((goal) => {
      // eslint-disable-next-line
      goalsTotalAmount = goalsTotalAmount + parseInt(goal.price);
    });

    if (player.bank >= goalsTotalAmount) {
      setDidWin(true);
    } else {
      setDidWin(false);
    }

    async function addScore() {
      try {
        const newPlayer = {
          id: name,
          amount: player.bank,
          date: now.toDateString(),
        };
        await scoresRef.doc(newPlayer.name).set({
          scores: {
            id: newPlayer.id,
            amount: newPlayer.amount,
            date: newPlayer.date,
          },
        });
        console.log("added score!");
      } catch (e) {
        console.error(e);
      }
    }
    if (didWin) {
      addScore();
    }
  }, [didWin]);

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

  const win = (
    <>
      <p>
        <h1>Congratulations, {name}!</h1>
      </p>
      <p>
        YES: You are an investing ace! You made smart investing decisions that
        paid off in the long run. Great job! What were some of the smart
        investing decisions you made? How did you think about investing early,
        balancing risk and return, diversifying to reduce your risk and tax
        benefits?{" "}
      </p>
      <p>You ended up with {formatter.format(player.bank)}</p>
    </>
  );
  const lose = (
    <>
      <h1>Try Again!</h1>
      <p>
        You were off the mark! Good thing this is just a game for learning. Play
        the game again, adjust your goals, and see if you can make better
        financial choices. Investing success can happen for you! What decisions
        in the game hurt your returns financially? How did you think about
        investing early, balancing risk and return, diversifying to reduce your
        risk and tax benefits? What could you do differently next time?
      </p>
      <p>You ended up with {formatter.format(player.bank)}</p>
    </>
  );

  return (
    <>
      {/* Is there a way to instead of having several pages change the content dynamically when the next is pressed?  */}
      <MainContent>
        {didWin ? win : lose}
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
        <Link to="/Board">
          <Button label="Continue" />
        </Link>
      </Buttons>
    </>
  );
}

export default Summary;
