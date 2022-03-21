import React, { useState } from "react";
import "../../utilities.css";
import usePlayer from "../../hooks/usePlayer";
import useCheckInvestments from "../../hooks/useCheckInvestments";
import INVESTMENTS_VEHICLES from "../../data/Investments";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import "../../styles/style.css";
import choice1a from "../../img/choice1-a.png";
import choice1b from "../../img/choice1-b.png";
import { green } from "@mui/material/colors";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { formatter } from "../../formatter";
import { Link } from "react-router-dom";
const choiceData = {
  year: 2004,
  setup: `Congrats! Your employer has a benefits program to help workers invest for their retirement. Your employer allows you to invest funds into a 401k up to 10% of your salary with a match of 50% of your investment. You have two choices.`,
  option1: `You choose to rent a small studio apartment and take public transportation to work so that you can afford to invest 10% of your salary into a 401k with a match of 5% (of your annual income). All of the funds, 15% of your total salary, will be invested in the S&P 500 index fund throughout the game.`,
  option2: `You really want a larger apartment and a used car to drive to work. Even though this means you will not have any funds to invest for the long-term, you feel like retirement is a long way off so it will be OK.
`,
};

function ChoiceOne() {
  const { salary, dispatch } = usePlayer();
  const addAnnualExpenditures = useCheckInvestments();
  const [choice, setChoice] = useState("");
  const player = usePlayer();
  let black = "#0D0C0C";
  let gray = "#2D2D2D";

  /**
   * UseStates to handle tab switching:
   * TODO: Find to optimize this
   */

  // set choice value to selected choice in UI
  const handleSelection = (e) => {
    setChoice(e);
  };
  // const handleSelection = (e) => console.log(e.target);
  // send selection data to the global player object
  const submitSelection = () => {
    const selection = {
      choice: choice,
    };
    let SPPercentage;
    if (choice === "invest") {
      SPPercentage = 0.1;
      selection.investment = INVESTMENTS_VEHICLES.SP;
      selection.expenditures = -(salary * SPPercentage) + addAnnualExpenditures;
    } else {
      SPPercentage = 0.02;
      selection.investment = "spend";
      selection.expenditures = -(salary * SPPercentage) + addAnnualExpenditures;
    }

    dispatch({
      type: "SELECT_CHOICE",
      payload: selection,
    });
  };
  const changeTab = () => {};

  /**
   * Function to calculate the total amount of money required to meet your goals.
   * TODO: Make this a helper function to clean code.
   * @returns {JSX.Element}
   */

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

                <p id={"choice-text"}>{choiceData.option1}</p>
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
                checked={choice === "else"}
                onClick={() => handleSelection("else")}
                value="spend"
                class={"radio"}
                sx={{ width: "10px", height: "5px" }}
              />
            </section>
          </div>
          <div id="financial-container">
            <div id="financial-top-container">
              <div className={"wrapper"}>
                <Tabs onSelect={changeTab}>
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
                      {/*<Graph data={}/>*/}
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
        <Link to="/graph-1">
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
    </>
  );
}

export default ChoiceOne;

// <MainContent>
//   <span>{choiceData.year}</span>
//   <h1>Retirement and financial goals</h1>
//   <p>{choiceData.setup}</p>
//   <h2>Your Choices</h2>
//   <ul>
//     <li>
//       <p>{choiceData.option1}</p>
//       <Button>Invest in 401K</Button>
//     </li>
//     <li>
//       <p>{choiceData.option2}</p>
//     </li>
//   </ul>
// </MainContent>
// <Choices>
//   <input
//       onClick={(e) => handleSelection(e)}
//       type="radio"
//       name="choice-1"
//       id="invest"
//       value="invest"
//   />
//   <label className="button" for="invest">
//     <span class="invest">Invest in 401K</span>
//   </label>
//   <label className="button" for="spend">
//     <span class="spend">Keep & spend the money</span>
//   </label>
// </Choices>
// <hr />
// <Buttons>
//   <Link to="/graph-1">
//     <Button label="Continue" onClick={submitSelection} />
//   </Link>
// </Buttons>
