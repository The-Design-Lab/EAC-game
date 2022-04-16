import React, { useState } from "react";
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
  const [isOptionADisabled, setIsOptionADisabled] = useState(false);
  const [isOptionBDisabled, setIsOptionBDisabled] = useState(false);
  const [colorA, setColorA] = useState("white");
  const [colorB, setColorB] = useState("white");

  const disableButtons = (e) => {
    console.log(e.target);
    if (e.target.id === "optionA" && isOptionBDisabled === false) {
      setIsOptionBDisabled(true);
      console.log(isOptionBDisabled);
    } else if (e.target.id === "optionA" && isOptionBDisabled === true) {
      setIsOptionBDisabled(false);
    } else if (e.target.id === "optionB" && isOptionADisabled === true) {
      setIsOptionADisabled(false);
    } else if (e.target.id === "optionB" && isOptionADisabled === false) {
      setIsOptionADisabled(true);
    }
  };

  const onButtonChange = (e) => {
    disableButtons(e);
    handleSelection(e);
    if (e.target.id === "optionA" && colorA === "white") {
      setColorA("#00FF38");
    } else if (e.target.id === "optionB" && colorB === "white") {
      setColorB("#00FF38");
    } else if (e.target.id === "optionA" && colorA === "#00FF38") {
      setColorA("white");
    } else if (e.target.id === "optionB" && colorB === "#00FF38") {
      setColorB("white");
    }
  };

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
          <div
            id="firstChoice"
            style={
              isOptionADisabled
                ? { border: "black 1px solid" }
                : { border: `${colorA} 1px solid` }
            }
          >
            <img
              className={"choice-image"}
              src={imageA}
              style={{
                width: "12rem",
                height: "10rem",
                filter: isOptionADisabled ? "grayscale(100%)" : "",
              }}
              alt="choice1a"
            />

            <p id="choice-text">{choiceData.option1}</p>
          </div>
          <input
            type="checkbox"
            id="optionA"
            name="goal"
            value={choiceA}
            onChange={onButtonChange}
            disabled={isOptionADisabled}
          />
          <label htmlFor="goal" />
        </div>
        <div className="choice-wrapper">
          <div
            id="secondChoice"
            style={
              isOptionBDisabled
                ? { border: "black 1px solid" }
                : { border: `${colorB} 1px solid` }
            }
          >
            <img
              className={"choice-image"}
              src={imageB}
              style={{
                width: "12rem",
                height: "10rem",
                filter: isOptionBDisabled ? "grayscale(100%)" : "",
              }}
              alt="choice1b"
            />
            <p id="choice-text">{choiceData.option2}</p>
          </div>
          <input
            type="checkbox"
            id="optionB"
            name="goal"
            value={choiceB}
            onChange={onButtonChange}
            disabled={isOptionBDisabled}
          />
          <label htmlFor="goal" />
        </div>
      </section>
    </div>
  );
}

export default InvestmentChoices;
