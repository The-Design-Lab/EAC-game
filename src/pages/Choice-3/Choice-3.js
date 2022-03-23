// noinspection ES6UnusedImports

import React, { useState } from "react";

import { Link } from "react-router-dom";
import "../../utilities.css";
import usePlayer from "../../hooks/usePlayer";
import useCheckInvestments from "../../hooks/useCheckInvestments";
import INVESTMENTS_VEHICLES from "../../data/Investments";
import Typography from "@mui/material/Typography";
import choice1a from "../../img/choice1-a.png";
import choice1b from "../../img/choice1-b.png";
import { green } from "@mui/material/colors";
import "../../styles/style.css";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Graph from "../../components/graph/Graph";
import { choice2 } from "../../data/investmentData";
import { formatter } from "../../formatter";

const choiceData = {
  year: 2006,
  setup: `You have been working for a few more years and have another $2,000 saved up that you are thinking about investing. You have two choices:`,
  option1: `You invest the money in stock in a small company, Invesgo, that has high risk but recently has shown potential for a high return. Invesgo’s stock price has increased from $6.01 to $13.1 in the years 2004 - 2006 with a high of $19.25 during that time.`,
  option2: `Invest the $2,000 in a growth mutual fund so that you can continue to diversify. The growth mutual fund has had a price increase from $5.14 per share to $6.97 per share from 2004-2006.`,
};

function ChoiceThree() {
  const { dispatch } = usePlayer();
  const addAnnualExpenditures = useCheckInvestments();
  const [choice, setChoice] = useState("");
  let black = "#0D0C0C";
  let gray = "#2D2D2D";

  const player = usePlayer();

  const handleSelection = (e) => {
    setChoice(e);
  };

  let addInvestment = -2000; // this is the same for a inveesgo or a mutual fund
  const submitSelection = () => {
    const selection = {
      choice: choice,
      expenditures: addAnnualExpenditures + addInvestment,
      investment:
        choice === INVESTMENTS_VEHICLES.inveesgo
          ? INVESTMENTS_VEHICLES.inveesgo
          : INVESTMENTS_VEHICLES.mutualFund,
    };

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
                checked={choice === "inveesgo"}
                onClick={() => handleSelection("inveesgo")}
                value="inveesgo"
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
                checked={choice === "mutualFund"}
                onClick={() => handleSelection("mutualFund")}
                value="mutualFund"
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
                      <Graph data={choice2} />
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
          <Link to="/graph-3">
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
    // <>
    //   <MainContent>
    //     <span>{choiceData.year}</span>
    //     <h1>Individual stocks</h1>
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
    //       name="choice-3"
    //       id="inveesgo"
    //       value="inveesgo"
    //     />
    //     <label className="button" for="inveesgo">
    //       <span class="inveesgo">Invest in Invesgo</span>
    //     </label>
    //
    //     <input
    //       onClick={(e) => handleSelection(e)}
    //       type="radio"
    //       name="choice-3"
    //       id="mutualFund"
    //       value="mutualFund"
    //     />
    //     <label className="button" for="mutualFund">
    //       <span class="mutualFund">Invest in a mutual fund</span>
    //     </label>
    //   </Choices>
    //   <hr />
    //   <Buttons>
    //     <Link to="/graph-3">
    //       <Button label="Continue" onClick={submitSelection} />
    //     </Link>
    //   </Buttons>
    // </>
  );
}

export default ChoiceThree;
