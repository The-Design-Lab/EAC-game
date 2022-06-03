import React, { useState } from "react";
import { choice1 } from "../../data/investmentData";
import "../../utilities.css";
import usePlayer from "../../hooks/usePlayer";
import useCheckInvestments from "../../hooks/useCheckInvestments";
import INVESTMENTS_VEHICLES from "../../data/Investments";
import "../../styles/style.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import ChoiceTabs from "../../components/choice-tabs";
import InvestmentChoices from "../../components/investment-choices";
import Choice2A from "../../img/choices/c2-A-image.webp";
import Choice2B from "../../img/choices/c2-B-image.webp";
import useFakePlayer from "../../hooks/useFakePlayer";
import Tooltip from "../../components/tooltip";

const choiceData = {
  header: "2005 Choice: CDs & Emergency Savings",
  year: 2005,
  setup: (
    <>
      You have been working for over a year and you notice that you have some
      extra room in your budget. You are conflicted because you have really old,
      used furniture
      <p id="subtext">
        Take a look at the Market News. How is the U.S. economy performing? What
        is the <Tooltip text={"S&P 500"} tooltipText={"S&P 500"} /> at now? How
        might this impact your financial decisions, if at all?
      </p>{" "}
    </>
  ),
  option1: {
    index: 1,
    text: (
      <>
        You know how important{" "}
        <Tooltip tooltipText={"Emergency Savings"} text={"emergency savings"} />{" "}
        is so you save $2,000 and deposit this in a{" "}
        <Tooltip text={"CD"} tooltipText={"CD"} />, earning 2.73%{" "}
        <Tooltip text={"APR"} tooltipText={"APR"} />, which is just for
        emergencies and just purchase a slipcover for your couch.{" "}
      </>
    ),
  },
  option2: {
    index: 2,
    text: (
      <>
        What can go wrong when you are a young adult? You decide you don’t need
        <Tooltip
          tooltipText={"Emergency Savings"}
          text={"emergency savings"}
        />{" "}
        and you use the $2,000 extra in your budget to pay for new furniture for
        your apartment throughout the year.
      </>
    ),
  },
};

function ChoiceTwo() {
  const { dispatch } = usePlayer();
  const { fakePlayerDispatch } = useFakePlayer();
  const addAnnualExpenditures = useCheckInvestments();
  const [choice, setChoice] = useState("");
  const [isChoiceSelected, setIsChoiceSelected] = useState(false);

  const player = usePlayer();

  const handleSelection = (e) => {
    setChoice(e.target.value);
  };

  const submitSelection = () => {
    dispatch({
      type: "RESET_RETURNS",
    });
    const selection = {
      choice: choice,
    };

    const whatIfSelection = {
      whatIfChoice: null,
    };

    const CD = -2000;
    const addBuyNewCar = -2000;

    if (choice === "invest") {
      selection.investment = INVESTMENTS_VEHICLES.CD;
      selection.expenditures = addAnnualExpenditures + CD;
      selection.index = choiceData.option1.index;

      //fake player
      whatIfSelection.expenditures = addAnnualExpenditures + addBuyNewCar;
      whatIfSelection.index = choiceData.option2.index;
    } else {
      selection.expenditures = addAnnualExpenditures + addBuyNewCar;
      selection.index = choiceData.option2.index;
      //fake player
      whatIfSelection.investment = INVESTMENTS_VEHICLES.CD;
      whatIfSelection.expenditures = addAnnualExpenditures + CD;
      whatIfSelection.index = choiceData.option1.index;
    }
    dispatch({
      type: "SELECT_CHOICE",
      payload: selection,
    });

    dispatch({
      type: "ADD_RETURNS",
      payload: "",
    });

    fakePlayerDispatch({
      type: "SELECT_CHOICE",
      payload: whatIfSelection,
    });
    fakePlayerDispatch({
      type: "ADD_RETURNS",
      payload: "",
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
            imageA={Choice2A}
            imageB={Choice2B}
            choiceA={"invest"}
            choiceB={"car"}
            setIsChoiceSelected={setIsChoiceSelected}
          />
          <div id="financial-container">
            <div id="financial-top-container">
              <div className={"wrapper"}>
                <ChoiceTabs year={2005} player={player} choice={choice1} />
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
        {isChoiceSelected ? (
          <Link to="/graph-2">
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
        ) : (
          <></>
        )}
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
