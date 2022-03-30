import React from "react";
import "../styles/tooltip.css";

function Tooltip({ text, tooltipText }) {
  return (
    <span data-tooltip={tooltipText} className={"tooltip"}>
      {" "}
      {text}
    </span>
  );
}

export default Tooltip;
