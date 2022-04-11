import React, { useState } from "react";
import "../../utilities.css";
import usePlayer from "../../hooks/usePlayer";
import useCheckInvestments from "../../hooks/useCheckInvestments";
import INVESTMENTS_VEHICLES from "../../data/Investments";
import Button from "@mui/material/Button";
import "../../styles/style.css";
import { Link } from "react-router-dom";
import ChoiceTabs from "../../components/choice-tabs";
import InvestmentChoices from "../../components/investment-choices";
import Choice1A from "../../img/choices/c1-A-image.png";
import Choice1B from "../../img/choices/c1-B-image.png";
const choiceData = {
  header: "Retirement & Financial Goals",
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

  // set choice value to selected choice in UI
  const handleSelection = (e) => {
    setChoice(e.target.value);
  };

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

  return (
    <>
      <div id="page-container">
        <div id="choice-page">
          <div id={"choice-container"}>
            <InvestmentChoices
              choice={choice}
              choiceData={choiceData}
              handleSelection={handleSelection}
              imageA={Choice1A}
              imageB={Choice1B}
              choiceA={"invest"}
              choiceB={"spend"}
            />
            <div id="financial-container">
              <div id="financial-top-container">
                <div className={"wrapper"}>
                  <ChoiceTabs year={"2003"} player={player} />
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
              height: "2.5rem",
              width: "10rem",
              fontSize: "1.2rem",
              padding: "0",

              "&:hover": {
                backgroundColor: "#00FF38",
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
                height: "2.5rem",
                width: "10rem",
                fontSize: "1.2rem",
                padding: "0",

                "&:hover": {
                  backgroundColor: "#00FF38",
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

export default ChoiceOne;
