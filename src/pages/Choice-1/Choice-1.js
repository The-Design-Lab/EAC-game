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

  return (
    <>
      <div id="choice-page">
        <div id={"choice-container"}>
          <InvestmentChoices
            choice={choice}
            choiceData={choiceData}
            handleSelection={handleSelection}
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
