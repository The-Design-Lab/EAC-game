import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/style.css";
import { green } from "@mui/material/colors";
import "../../utilities.css";
import usePlayer from "../../hooks/usePlayer";
import useCheckInvestments from "../../hooks/useCheckInvestments";
import Button from "@mui/material/Button";
import { choice3 } from "../../data/investmentData";
import InvestmentChoices from "../../components/investment-choices";
import ChoiceTabs from "../../components/choice-tabs";

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

  return (
    <>
      <div id="choice-page">
        <div id={"choice-container"}>
          <InvestmentChoices
            handleSelection={handleSelection}
            choiceData={choiceData}
            choice={choice}
          />
          <div id="financial-container">
            <div id="financial-top-container">
              <div className={"wrapper"}>
                <ChoiceTabs year={2008} choice={choice3} player={player} />
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
