import React, { useState } from "react";
import { MainContent, Buttons, Choices } from "../../styles/choicesSyles";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import "../../utilities.css";
import usePlayer from "../../hooks/usePlayer";
import useCheckInvestments from "../../hooks/useCheckInvestments";
import INVESTMENTS_VEHICLES from "../../data/Investments";

const choiceData = {
  year: 2005,
  setup: ` You have been working for over a year and you notice that you have some extra room in your budget. You are conflicted because you have really old, used furniture. You have two choices:`,
  option1: `You know how important emergency savings is so you save $2,000 and deposit this in a special savings account which is just for emergencies and just purchase a slipcover for your couch. `,
  option2: `What can go wrong when you are a young adult? You decide you don’t need emergency savings and you use the $2,000 extra in your budget to pay for new furniture for your apartment throughout the year. `,
};

function ChoiceTwo() {
  const { dispatch } = usePlayer();
  const addAnnualExpenditures = useCheckInvestments();
  const [choice, setChoice] = useState("");

  const handleSelection = (e) => {
    setChoice(e.target.value);
  };

  const submitSelection = () => {
    const selection = {
      choice: choice,
    };

    const CD = -2000;
    const addBuyNewCar = -2000;
    if (choice === "invest") {
      selection.investment = INVESTMENTS_VEHICLES.CD;
      selection.expenditures = addAnnualExpenditures + CD;
    } else {
      selection.expenditures = addAnnualExpenditures + addBuyNewCar;
    }

    dispatch({
      type: "SELECT_CHOICE",
      payload: selection,
    });
  };

  return (
    <>
      <MainContent>
        <span>{choiceData.year}</span>
        <h1>CDs and Emergency Savings</h1>
        <p>{choiceData.setup}</p>
        <h2>Your Choices</h2>
        <ul>
          <li>
            <p>{choiceData.option1}</p>
          </li>
          <li>
            <p>{choiceData.option2}</p>
          </li>
        </ul>
      </MainContent>
      <Choices>
        <input
          onClick={(e) => handleSelection(e)}
          type="radio"
          name="choice-1"
          id="invest"
          value="invest"
        />
        <label className="button" for="invest">
          <span class="invest">Invest in CD</span>
        </label>

        <input
          onClick={(e) => handleSelection(e)}
          type="radio"
          name="choice-1"
          id="spend"
          value="spend"
        />
        <label className="button" for="spend">
          <span class="spend">Keep & spend the money</span>
        </label>
      </Choices>
      <hr />
      <Buttons>
        <Link to="/graph-2">
          <Button label="Continue" onClick={submitSelection} />
        </Link>
      </Buttons>
    </>
  );
}

export default ChoiceTwo;
