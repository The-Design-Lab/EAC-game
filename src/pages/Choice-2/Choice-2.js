import React, { useState } from "react";
import { choice1 } from "../../data/investmentData";
import "../../utilities.css";
import usePlayer from "../../hooks/usePlayer";
import useCheckInvestments from "../../hooks/useCheckInvestments";
import INVESTMENTS_VEHICLES from "../../data/Investments";
import "../../styles/style.css";
import choice1a from "../../img/choice1-a.png";
import choice1b from "../../img/choice1-b.png";
import { green } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Graph from "../../components/graph/Graph";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Radio from "@mui/material/Radio";
import { formatter } from "../../formatter";
import { Link } from "react-router-dom";

const choiceData = {
  year: 2005,
  setup: ` You have been working for over a year and you notice that you have some extra room in your budget. You are conflicted because you have really old, used furniture. You have two choices:`,
  option1: `You know how important emergency savings is so you save $2,000 and deposit this in a special savings account which is just for emergencies and just purchase a slipcover for your couch. `,
  option2: `What can go wrong when you are a young adult? You decide you don’t need emergency savings and you use the $2,000 extra in your budget to pay for new furniture for your apartment throughout the year. `,
};

function ChoiceTwo() {
  const { dispatch } = usePlayer();
  const addAnnualExpenditures = useCheckInvestments();
  const [choice, setChoice] = useState("");
  let black = "#0D0C0C";
  let gray = "#2D2D2D";
  const player = usePlayer();

  const handleSelection = (e) => {
    setChoice(e);
    console.log(e);
  };

  const submitSelection = () => {
    const selection = {
      choice: choice,
    };

    const CD = -2000;
    const addBuyNewCar = -2000;
    if (choice === "invest") {
      selection.investment = INVESTMENTS_VEHICLES.CD;
      selection.expenditures = addAnnualExpenditures + CD;
    } else {
      selection.expenditures = addAnnualExpenditures + addBuyNewCar;
    }

    dispatch({
      type: "SELECT_CHOICE",
      payload: selection,
    });
  };
  function getGoalsAmount() {
    let goalTotal = 0;
    player.goals.forEach(
      (goal) => (goalTotal = goalTotal + parseInt(goal.price))
    );
    return <span>{formatter.format(goalTotal)}</span>;
  }

  return (
    <>
      <div id="choice-page">
        <div id={"choice-container"}>
          <div id={"details-container"}>
            <section id="details-header-container">
              <h4 id={"header"}>
                <b>Retirement and financial goals</b>
              </h4>
              <p id="subtext">{choiceData.setup}</p>
            </section>
            <Typography id="choices-header" variant={"h4"}>
              <b>Your Choices</b>
            </Typography>
            <section id="choices">
              <div id="firstChoice">
                <img
                  src={choice1a}
                  style={{ width: "12rem", height: "10rem" }}
                  alt="choice1a"
                />

                <p id="choice-text">{choiceData.option1}</p>
              </div>
              <Radio
                checked={choice === "invest"}
                onClick={() => handleSelection("invest")}
                value="invest"
                class={"radio"}
                sx={{ width: "10px", height: "5px" }}
              />
              <div id="secondChoice">
                <img
                  src={choice1b}
                  style={{ width: "12rem", height: "10rem" }}
                  alt="choice1b"
                />
                <p id="choice-text">{choiceData.option2}</p>
              </div>
              <Radio
                checked={choice === "spend"}
                onClick={() => handleSelection("spend")}
                value="spend"
                class={"radio"}
                sx={{ width: "10px", height: "5px" }}
              />
            </section>
          </div>

          <div id="financial-container">
            <div id="financial-top-container">
              <div className={"wrapper"}>
                <Tabs>
                  <TabList id={"tabs-list"}>
                    <Tab
                      id={"firstTab"}
                      className={"tabs toggledTab"}
                      style={{
                        listStyle: "none",
                        width: "50%",
                        backgroundColor: black,
                        borderRadius: "10px",
                      }}
                    >
                      <div className={"class1"}>
                        <Typography variant={"h6"}>Market</Typography>
                      </div>
                    </Tab>
                    <Tab
                      id={"secondTab"}
                      className={"tabs closedTab"}
                      style={{
                        listStyle: "none",
                        width: "50%",
                        backgroundColor: gray,
                        borderRadius: "10px",
                      }}
                    >
                      <div className={"class1"}>
                        <Typography variant={"h6"}>Investments</Typography>
                      </div>
                    </Tab>
                  </TabList>
                  <TabPanel>
                    <div id="marketNews-container">
                      <Typography variant={"h4"}>Market News</Typography>
                      <hr />
                      <div id="news-details">
                        <Typography variant={"h6"}> Year: 2003</Typography>
                        <p>
                          The US economy grew at an annual rate of 2.86% in
                          2003, an increase from the preceding year. The S&P
                          500, which fell for three consecutive years in
                          2000-2002, rebounded in 2003 up 26.38% for the year.
                          The Schiller PE Ratio increased from 22.9% at the
                          beginning of the year to 26.64 at year end, indicating
                          that stocks are in an extreme bubble.
                        </p>
                        <Typography variant={"h6"}> US Economy</Typography>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div id="investments-container">
                      <Typography variant={"h4"}>
                        Investment Progress Since 2003
                      </Typography>
                      <hr />
                      <Graph data={choice1} />
                      <Typography variant={"h6"}>
                        Total: {formatter.format(player.salary)}
                      </Typography>
                      <hr />
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
            <div id="account-container">
              <Typography variant={"h5"}>Your Account</Typography>

              <div id="account-grid">
                <div>Salary:</div>
                <div>Goals: {getGoalsAmount()}</div>
                <div>Total Balance: {formatter.format(player.bank)}</div>
                <div
                  style={{
                    display: "grid",
                    gap: "1rem",
                    gridTemplateColumns: "2fr 2fr",
                  }}
                >
                  Your Goals:{" "}
                  {player.goals.map((goal) => (
                    <span
                      style={{
                        backgroundColor: "white",
                        color: "black",
                        width: "fit-content",
                        maxWidth: "5.3vw",
                        height: "fit-content",
                        borderRadius: "5%",
                        fontSize: "0.9rem",
                        padding: "1px",
                      }}
                    >
                      <b>{goal.name}</b>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr
          style={{
            margin: "0.2rem 150px",
          }}
        />
        <div id="button-container">
          <Button
            sx={{
              backgroundColor: "#e5e5e5",
              color: "#000000",
              "&:hover": {
                backgroundColor: green[700],
              },
            }}
            id="btn"
          >
            Back
          </Button>
          <Link to="/graph-2">
            <Button
              id="btn"
              sx={{
                backgroundColor: "#e5e5e5",
                color: "#000000",
                "&:hover": {
                  backgroundColor: green[700],
                },
              }}
              onClick={submitSelection}
            >
              Continue
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ChoiceTwo;

// <>
//   <MainContent>
//     <span>{choiceData.year}</span>
//     <h1>CDs and Emergency Savings</h1>
//     <p>{choiceData.setup}</p>
//     <h2>Your Choices</h2>
//     <ul>
//       <li>
//         <p>{choiceData.option1}</p>
//       </li>
//       <li>
//         <p>{choiceData.option2}</p>
//       </li>
//     </ul>
//   </MainContent>
//   <Choices>
//     <input
//       onClick={(e) => handleSelection(e)}
//       type="radio"
//       name="choice-1"
//       id="invest"
//       value="invest"
//     />
//     <label className="button" for="invest">
//       <span class="invest">Invest in CD</span>
//     </label>
//
//     <input
//       onClick={(e) => handleSelection(e)}
//       type="radio"
//       name="choice-1"
//       id="spend"
//       value="spend"
//     />
//     <label className="button" for="spend">
//       <span class="spend">Keep & spend the money</span>
//     </label>
//   </Choices>
//   <hr />
//   <Buttons>
//     <Link to="/graph-2">
//       <Button label="Continue" onClick={submitSelection} />
//     </Link>
//   </Buttons>
// </>
