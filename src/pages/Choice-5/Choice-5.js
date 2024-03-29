import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/style.css";
import "../../utilities.css";
import usePlayer from "../../hooks/usePlayer";
import useCheckInvestments from "../../hooks/useCheckInvestments";
import Button from "@mui/material/Button";
import { choice4 } from "../../data/investmentData";
import InvestmentChoices from "../../components/investment-choices";
import ChoiceTabs from "../../components/choice-tabs";
import Choice5A from "../../img/choices/c5-A-image.webp";
import Choice5B from "../../img/choices/c5-B-image.webp";
import useFakePlayer from "../../hooks/useFakePlayer";
import { PlayerContext } from "../../contexts/PlayerContext";
import CalculateGraphReturns from "../../hooks/CalculateGraphReturns";
import Tooltip from "../../components/tooltip";

const choiceData = {
  header: "2014 Choice: Hold or Sell",
  year: 2014,
  setup: (
    <>
      How has the stock market recently performed? In 2004, you invested 15% of
      your income in shares of the S&P 500 at $17.18.
      <p id="subtext">
        Take a look at the Market News. How is the U.S. economy performing? What
        is the <Tooltip text={"S&P 500"} tooltipText={"S&P 500"} /> at now? How
        might this impact your financial decisions, if at all?
      </p>{" "}
    </>
  ),
  option1: {
    index: 1,
    text: "You do not need your money until 2040. The 68% gain is nice, but you decide to keep all of the funds in the S&P 500 because you have 32 more years until you need your money which you think is plenty of time to withstand ups and downs in the market.",
  },
  option2: {
    index: 2,
    text: "Sell all of your shares because you are happy with the 68% gain that you have made.",
  },
};

function ChoiceFive() {
  const { dispatch } = usePlayer();
  const { investments } = useContext(PlayerContext);
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
    const removedInvestment = choice === "sell" ? "S&P" : null;
    const selection = {
      choice: choice,
      expenditures: addAnnualExpenditures,
      investment: removedInvestment,
      index:
        choice === "S&P" ? choiceData.option1.index : choiceData.option2.index,
    };
    const whatIfSelection = {
      choice: choice === "sell" ? null : "S&P",
      expenditures: addAnnualExpenditures,
      investment: removedInvestment,
      index:
        choice === "S&P" ? choiceData.option2.index : choiceData.option1.index,
    };

    if (choice === "sell") {
      dispatch({
        type: "REMOVE_INVESTMENT",
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
    } else {
      let returns = CalculateGraphReturns(2013, investments);
      dispatch({
        type: "SELECT_CHOICE",
        payload: selection,
      });
      dispatch({
        type: "ADD_RETURNS",
        payload: returns,
      });

      fakePlayerDispatch({
        type: "REMOVE_INVESTMENT",
        payload: whatIfSelection,
      });
      fakePlayerDispatch({
        type: "ADD_RETURNS",
        payload: returns,
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
            imageA={Choice5A}
            imageB={Choice5B}
            choiceA={""}
            choiceB={"sell"}
            setIsChoiceSelected={setIsChoiceSelected}
          />
          <div id="financial-container">
            <div id="financial-top-container">
              <div className={"wrapper"}>
                <ChoiceTabs choice={choice4} player={player} year={2014} />
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
          <Link to="/graph-5">
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
