import React from "react";
// import Tooltip from "./tooltip";
import Typography from "@mui/material/Typography";

function InvestmentChoices({
  choiceData,
  handleSelection,
  imageA,
  imageB,
  choiceA,
  choiceB,
}) {
  return (
    <div id={"details-container"}>
      <section id="details-header-container">
        <h3 id={"header"}>{choiceData.header}</h3>
        <p id="subtext">{choiceData.setup}</p>
      </section>
      <Typography id="choices-header" variant={"h4"}>
        <b>Your Choices</b>
      </Typography>
      <section id="choices">
        <div className="choice-wrapper">
          <div id="firstChoice">
            <img
              className={"choice-image"}
              src={imageA}
              style={{ width: "12rem", height: "10rem" }}
              alt="choice1a"
            />

            <p id="choice-text">{choiceData.option1}</p>
          </div>
          <input
            type="checkbox"
            id="check"
            name="goal"
            value={choiceA}
            onChange={handleSelection}
          />
          <label htmlFor="goal" />
        </div>
        <div className="choice-wrapper">
          <div id="secondChoice">
            <img
              className={"choice-image"}
              src={imageB}
              style={{ width: "12rem", height: "10rem" }}
              alt="choice1b"
            />
            <p id="choice-text">{choiceData.option2}</p>
          </div>
          <input
            type="checkbox"
            id="check"
            name="goal"
            value={choiceB}
            onChange={handleSelection}
          />
          <label htmlFor="goal" />
        </div>
      </section>
    </div>
  );
}

export default InvestmentChoices;
