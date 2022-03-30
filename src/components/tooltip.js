import React from "react";
import "../styles/tooltip.css";

function Tooltip({ text, tooltipText }) {
  return (
    <a href="#" data-tooltip={tooltipText} className={"tooltip"}>
      {" "}
      {text}
    </a>
  );
}

export default Tooltip;
