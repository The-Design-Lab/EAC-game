import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../utilities.css";
import usePlayer from "../../hooks/usePlayer";
import useCheckInvestments from "../../hooks/useCheckInvestments";
import INVESTMENTS_VEHICLES from "../../data/Investments";
import "../../styles/style.css";
import Button from "@mui/material/Button";
import { choice2 } from "../../data/investmentData";
import InvestmentChoices from "../../components/investment-choices";
import ChoiceTabs from "../../components/choice-tabs";
import Choice3A from "../../img/choices/c3-A-image.png";
import Choice3B from "../../img/choices/c3-B-image.png";
import useFakePlayer from "../../hooks/useFakePlayer";

const choiceData = {
  header: "Individual Stocks & Mutual Funds",
  year: 2006,
  setup: `You have been working for a few more years and have another $2,000 saved up that you are thinking about investing. You have two choices:`,
  option1: `You invest the money in stock in a small company, Invesgo, that has high risk but recently has shown potential for a high return. Invesgo’s stock price has increased from $6.01 to $13.1 in the years 2004 - 2006 with a high of $19.25 during that time.`,
  option2: `Invest the $2,000 in a growth mutual fund so that you can continue to diversify. The growth mutual fund has had a price increase from $5.14 per share to $6.97 per share from 2004-2006.`,
};

function ChoiceThree() {
  const { dispatch } = usePlayer();
  const { fakePlayerDispatch } = useFakePlayer();
  const addAnnualExpenditures = useCheckInvestments();
  const [choice, setChoice] = useState("");
  const player = usePlayer();

  const handleSelection = (e) => {
    setChoice(e.target.value);
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

    const whatIfSelection = {
      choice: choice,
      expenditures: addAnnualExpenditures + addInvestment,
      investment:
        choice === INVESTMENTS_VEHICLES.inveesgo
          ? INVESTMENTS_VEHICLES.mutualFund
          : INVESTMENTS_VEHICLES.inveesgo,
    };

    dispatch({
      type: "SELECT_CHOICE",
      payload: selection,
    });
    fakePlayerDispatch({
      type: "SELECT_CHOICE",
      payload: whatIfSelection,
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
            imageA={Choice3A}
            imageB={Choice3B}
            choiceA={"Inveesgo"}
            choiceB={"mutualFund"}
          />
          <div id="financial-container">
            <div id="financial-top-container">
              <div className={"wrapper"}>
                <ChoiceTabs choice={choice2} player={player} year={2006} />
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
        <Link to="/graph-3">
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
