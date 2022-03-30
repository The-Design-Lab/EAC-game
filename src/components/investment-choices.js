import React from "react";
import Tooltip from "./tooltip";
import Typography from "@mui/material/Typography";
import choice1a from "../img/choice1-a.png";
import Radio from "@mui/material/Radio";
import choice1b from "../img/choice1-b.png";

function InvestmentChoices({ choiceData, choice, handleSelection }) {
  return (
    <div id={"details-container"}>
      <section id="details-header-container">
        <h4 id={"header"}>
          <b>
            Retirement and financial{" "}
            <Tooltip text={"goal"} tooltipText={"this is a goal"} />
          </b>
        </h4>
        <p id="subtext">{choiceData.setup}</p>
      </section>
      <Typography id="choices-header" variant={"h4"}>
        <b>Your Choices</b>
      </Typography>
      <section id="choices">
        <div id="firstChoice">
          <img
            src={choice1a}
            style={{ width: "12rem", height: "10rem" }}
            alt="choice1a"
          />

          <p id="choice-text">{choiceData.option1}</p>
        </div>
        <Radio
          checked={choice === "invest"}
          onClick={() => handleSelection("invest")}
          value="invest"
          class={"radio"}
          sx={{ width: "10px", height: "5px" }}
        />
        <div id="secondChoice">
          <img
            src={choice1b}
            style={{ width: "12rem", height: "10rem" }}
            alt="choice1b"
          />
          <p id="choice-text">{choiceData.option2}</p>
        </div>
        <Radio
          checked={choice === "spend"}
          onClick={() => handleSelection("spend")}
          value="spend"
          class={"radio"}
          sx={{ width: "10px", height: "5px" }}
        />
      </section>
    </div>
  );
}

export default InvestmentChoices;
