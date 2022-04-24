import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../../utilities.css";
import usePlayer from "../../hooks/usePlayer";
import useCheckInvestments from "../../hooks/useCheckInvestments";
import INVESTMENTS_VEHICLES from "../../data/Investments";
import "../../styles/style.css";
import Button from "@mui/material/Button";
import { choice2, choice3 } from "../../data/investmentData";
import InvestmentChoices from "../../components/investment-choices";
import ChoiceTabs from "../../components/choice-tabs";
import Choice3A from "../../img/choices/c3-A-image.webp";
import Choice3B from "../../img/choices/c3-B-image.webp";
import useFakePlayer from "../../hooks/useFakePlayer";
import CalculateGraphReturns from "../../hooks/CalculateGraphReturns";
import { PlayerContext } from "../../contexts/PlayerContext";
import Tooltip from "../../components/tooltip";

const choiceData = {
  header: "Individual Stocks & Mutual Funds",
  year: 2006,
  setup: (
    <>
      You have been working for a few more years and have another $2,000 saved
      up that you are thinking about investing.
      <p>
        Take a look at the Market News. How is the U.S. economy performing? What
        is the <Tooltip text={"S&P 500"} tooltipText={"S&P 500"} /> at now? How
        might this impact your financial decisions, if at all?
      </p>{" "}
    </>
  ),
  option1: (
    <>
      You invest the money in <Tooltip tooltipText={"Stock"} text={"stock"} />{" "}
      in a small company, Invesgo, that has high{" "}
      <Tooltip tooltipText={"Risk"} text={"risk"} /> but recently has shown
      potential for a high{" "}
      <Tooltip tooltipText={"Potential Return"} text={"return"} />. Invesgo’s
      stock price has increased from $6.01 to $13.1 in the years 2004 - 2006
      with a high of $19.25 during that time.
    </>
  ),
  option2: (
    <>
      Invest the $2,000 in a growth{" "}
      <Tooltip text={"mutual fund"} tooltipText={"Mutual Fund"} /> so that you
      can continue to <Tooltip text={"diversify"} tooltipText={"Diversify"} />.
      The growth mutual fund has had a price increase from $5.14 per{" "}
      <Tooltip tooltipText={"Share"} text={"share"} /> to $6.97 per share from
      2004-2006.
    </>
  ),
};

function ChoiceThree() {
  const { investments } = useContext(PlayerContext);
  const { dispatch } = usePlayer();
  const { fakePlayerDispatch } = useFakePlayer();
  const addAnnualExpenditures = useCheckInvestments();
  const [choice, setChoice] = useState("");
  const player = usePlayer();
  const [isChoiceSelected, setIsChoiceSelected] = useState(false);

  const handleSelection = (e) => {
    setChoice(e.target.value);
  };

  let addInvestment = -2000; // this is the same for a inveesgo or a mutual fund
  const submitSelection = () => {
    dispatch({
      type: "RESET_RETURNS",
    });
    let returns;
    let temp = CalculateGraphReturns(2006, investments);
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
    returns =
      selection.choice === INVESTMENTS_VEHICLES.inveesgo
        ? choice3[4][3] + temp
        : choice3[3][3] + temp;

    dispatch({
      type: "SELECT_CHOICE",
      payload: selection,
    });
    dispatch({
      type: "ADD_RETURNS",
      payload: returns,
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
            setIsChoiceSelected={setIsChoiceSelected}
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
        {isChoiceSelected ? (
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
        ) : (
          <></>
        )}
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
