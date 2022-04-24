import React from "react";
import "../styles/tooltip.css";
import { dictionaryData } from "../data/definitions";

function Tooltip({ text, tooltipText }) {
  return (
    <span
      data-tooltip={
        dictionaryData.find((element) => element.term === tooltipText)
          .definition
      }
      className={"tooltip"}
    >
      {" "}
      {text}
    </span>
  );
}

export default Tooltip;
