import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/style.css";
import choice1a from "../../img/choice1-a.png";
import choice1b from "../../img/choice1-b.png";
import { green } from "@mui/material/colors";
import "../../utilities.css";
import usePlayer from "../../hooks/usePlayer";
import useCheckInvestments from "../../hooks/useCheckInvestments";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Graph from "../../components/graph/Graph";
import { choice3 } from "../../data/investmentData";
import { formatter } from "../../formatter";

const choiceData = {
  year: 2009,
  setup: `The stock market has gone down recently. In 2004, you invested 15% of your income in shares of an S & P 500 Index Fund at $17.18 per share. The S & P 500 is now down to $13.93 BUT you do not need your money until 2040.`,
  option1: `Keep all of the funds in the S & P 500 because you have 36 more years until you need your money.`,
  option2: `Losing value in your investment is understandably concerning and scary. You sell your shares because you are concerned the S & P 500 will continue to go down.`,
};

function ChoiceFour() {
  const { dispatch } = usePlayer();
  const addAnnualExpenditures = useCheckInvestments();
  const [choice, setChoice] = useState("");
  let black = "#0D0C0C";
  let gray = "#2D2D2D";

  const player = usePlayer();

  const handleSelection = (e) => {
    setChoice(e);
    console.log(choice);
  };

  const submitSelection = () => {
    const removedInvestment = choice === "sell" ? "S&P" : null;
    const selection = {
      choice: choice,
      expenditures: addAnnualExpenditures,
      investment: removedInvestment,
    };
    if (choice === "S&P") {
      dispatch({
        type: "SELECT_CHOICE",
        payload: selection,
      });
    }

    if (choice === "sell") {
      dispatch({
        type: "REMOVE_INVESTMENT",
        payload: selection,
      });
    }
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
              <Typography variant={"h4"} id={"header"}>
                <b>Retirement and financial goals</b>
              </Typography>
              <Typography variant={"h6"} id="subtext">
                {choiceData.setup}
              </Typography>
            </section>
            <Typography id="choices-header" variant={"h3"}>
              <b>Your Choices</b>
            </Typography>
            <section id="choices">
              <div id="firstChoice">
                <img
                  src={choice1a}
                  style={{ width: "248px", height: "188px" }}
                  alt="choice1a"
                />

                <Typography variant={"h6"} id="choice-text">
                  {choiceData.option1}
                </Typography>
              </div>
              <Radio
                checked={choice === "hold"}
                onClick={() => handleSelection("hold")}
                value="hold"
                class={"radio"}
                sx={{ width: "10px", height: "5px" }}
              />
              <div id="secondChoice">
                <img
                  src={choice1b}
                  style={{ width: "248px", height: "188px" }}
                  alt="choice1b"
                />
                <Typography variant={"h6"} id="choice-text">
                  {choiceData.option2}
                </Typography>
              </div>
              <Radio
                checked={choice === "sell"}
                onClick={() => handleSelection("sell")}
                value="sell"
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
                      <Graph data={choice3} />
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
            margin: "30px 150px",
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
          <Link to="/graph-4">
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

export default ChoiceFour;

// <>
//   <MainContent>
//     <span>{choiceData.year}</span>
//     <h1> Index Funds & Mutual Funds</h1>
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
//         onClick={(e) => handleSelection(e)}
//         type="radio"
//         name="choice-4"
//         id="hold"
//         value="hold"
//     />
//     <label className="button" for="hold">
//       <span class="hold">Keep investment in the S&P 500</span>
//     </label>
//
//     <input
//         onClick={(e) => handleSelection(e)}
//         type="radio"
//         name="choice-4"
//         id="sell"
//         value="sell"
//     />
//     <label className="button" for="sell">
//       <span class="sell">Sell your shares</span>
//     </label>
//   </Choices>
//   <hr />
//   <Buttons>
//     <Link to="/graph-4">
//       <Button label="Continue" onClick={submitSelection} />
//     </Link>
//   </Buttons>
// </>
