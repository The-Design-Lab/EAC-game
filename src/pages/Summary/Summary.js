import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import usePlayer from "../../hooks/usePlayer";
import { formatter } from "../../formatter";
import {
  uniqueNamesGenerator,
  adjectives,
  animals,
} from "unique-names-generator";
import scoresRef from "../../data/firebase";
import Button from "@mui/material/Button";
import { GetGoalsAmount } from "../../get-goals-amount";
import "../../styles/summary.css";
import green from "../../img/green-choice.png";
import red from "../../img/red-choice.png";

function Summary() {
  const player = usePlayer();
  let goalsTotalAmount = 0;
  const date = Date.now();
  const now = new Date(date);
  const name = uniqueNamesGenerator({
    dictionaries: [adjectives, animals],
  });
  const [didWin, setDidWin] = useState(null);

  const finalAmount = player.bank + player.investmentAccount;

  useEffect(() => {
    player.goals.forEach((goal) => {
      // eslint-disable-next-line
      goalsTotalAmount = goalsTotalAmount + parseInt(goal.price);
    });

    if (finalAmount >= goalsTotalAmount) {
      setDidWin(true);
    } else {
      setDidWin(false);
    }

    async function addScore() {
      try {
        const newPlayer = {
          id: name,
          amount: formatter.format(
            parseInt(player.bank + player.investmentAccount)
          ),
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

  const win = {
    firstElement: `${name}, you are an investing ace!`,
    secondElement:
      "You made smart investing decisions that paid off in the long run. Great job!",
    thirdElement: "You have enough to purchase your goals, ",
    fourthElement: "What were some of the smart investment decisions you made?",
  };

  const lose = {
    firstElement: `${name}, you were a little off the mark!`,
    secondElement:
      "Good thing this is just a game for learning. Play the game again, adjust your goals, and see if you can make better financial choices. Investing success can happen for you!",
    thirdElement: "You don’t have enough to purchase your goals, ",
    fourthElement:
      "What decisions in the game hurt your returns financially? What could you do differently next time?",
  };

  return (
    <>
      <div id="summary-page__container">
        <div id={"summary-page__header"}>
          <h3>{didWin ? win.firstElement : lose.firstElement}</h3>{" "}
          <p>{didWin ? win.secondElement : lose.secondElement}</p>
        </div>
        <div id={"summary-page__totals"}>
          <div>
            {" "}
            You earned{" "}
            <span style={{ color: didWin ? "#00FF38" : "red" }}>
              {" "}
              {formatter.format(finalAmount)}
            </span>{" "}
            from investing
          </div>
          <div>
            {didWin ? win.thirdElement : lose.thirdElement} which totaled{" "}
            <span style={{ color: didWin ? "#00FF38" : "red" }}>
              {GetGoalsAmount(player)}
            </span>
          </div>
        </div>
        <div id={"summary-page__goal-images"}>
          {player.goals.map((goal) => {
            return (
              <div>
                <img
                  src={process.env.PUBLIC_URL + goal.src}
                  alt=""
                  width="3rem"
                />
                <p>
                  {goal.name}: {formatter.format(goal.price)}
                </p>
              </div>
            );
          })}
        </div>

        <div id={"summary-page__subheader"}>
          <p>Here are your investment choices.</p>
          <p>{didWin ? win.fourthElement : lose.fourthElement}</p>
        </div>
        <div id={"summary-page__choices"}>
          <div>
            <img src={player.choices[0] === "invest" ? green : red} alt="" />
            Investing early
          </div>
          <div>
            <img src={player.choices[1] === "invest" ? green : red} alt="" />
            Balancing risk & return
          </div>
          <div>
            <img src={player.choices[2] ? green : red} alt="" />
            Diversifying to reduce risk
          </div>
          <div>
            <img src={player.choices[3] === "S&P" ? green : red} alt="" />
            Tax benefits
          </div>
        </div>
      </div>
      <hr
        style={{
          margin: "0.2rem 150px",
        }}
      />
      <div id="button-container">
        <Link to="/board">
          <Button
            id="btn"
            sx={{
              backgroundColor: "#e5e5e5",
              color: "#000000",
              height: "2.5rem",
              width: "10rem",
              fontSize: "1.2rem",
              padding: "0",

              "&:hover": {
                backgroundColor: "#00FF38",
              },
            }}
          >
            Continue
          </Button>
        </Link>
      </div>
    </>
  );
}

export default Summary;
