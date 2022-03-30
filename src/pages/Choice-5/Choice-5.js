import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/style.css";
import { green } from "@mui/material/colors";
import "../../utilities.css";
import usePlayer from "../../hooks/usePlayer";
import useCheckInvestments from "../../hooks/useCheckInvestments";
import Button from "@mui/material/Button";
import { choice4 } from "../../data/investmentData";
import InvestmentChoices from "../../components/investment-choices";
import ChoiceTabs from "../../components/choice-tabs";
// import INVESTMENTS_VEHICLES from '../../data/Investments'

const choiceData = {
  year: 2013,
  setup: `The stock market has recently increased. In 2004, you invested 15% of your income in shares of the S & P 500 at $17.18. The S & P 500 is now at $22.19. You do not need your money until 2040.`,
  option1: `The $5 gain is nice, but you decide to keep all of the funds in the S & P 500 because you have 32 more years until you need your money which you think is plenty of time to withstand ups and downs in the market.`,
  option2: `Sell all of your shares because you are happy with the $5 gain you have made.`,
};

function ChoiceFive() {
  const { dispatch } = usePlayer();
  const addAnnualExpenditures = useCheckInvestments();
  const [choice, setChoice] = useState("");

  const player = usePlayer();

  const handleSelection = (e) => {
    setChoice(e);
  };

  const submitSelection = () => {
    const removedInvestment = choice === "sell" ? "S&P" : null;
    const selection = {
      choice: choice,
      expenditures: addAnnualExpenditures,
      investment: removedInvestment,
    };

    if (choice === "sell")
      dispatch({
        type: "REMOVE_INVESTMENT",
        payload: selection,
      });
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
                <ChoiceTabs choice={choice4} player={player} year={2013} />
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
          <Link to="/graph-5">
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

// <>
//   <MainContent>
//     <span>{choiceData.year}</span>
//     <h1>Hold or Sell</h1>
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
//         name="choice-5"
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
//         name="choice-5"
//         id="sell"
//         value="sell"
//     />
//     <label className="button" for="sell">
//       <span class="sell">Sell your shares</span>
//     </label>
//   </Choices>
//   <hr />
//   <Buttons>
//     <Link to="/graph-5">
//       <Button label="Continue" onClick={submitSelection} />
//     </Link>
//   </Buttons>
// </>

export default ChoiceFive;
