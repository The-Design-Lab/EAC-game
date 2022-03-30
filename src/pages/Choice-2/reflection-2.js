import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { green } from "@mui/material/colors";
import "../../styles/reflection.css";
import questionMark from "../../img/reflections/questionmark.png";

function Reflection2() {
  return (
    <>
      <div id="container">
        <div className="subcontainer">
          <h1> Time to reflect! </h1>
        </div>
        <div className="subcontainer">
          <div id="image-container">
            <img src={questionMark} alt="" id={"reflection2-img"} />
          </div>
          <div id="text-container">
            <h5>Did you choose to save? </h5>
            <p>
              Experts recommend that individuals have 3-6 months of basic living
              expenses in an emergency savings fund.
            </p>
            <h5>Why does this matter?</h5>
            <p>
              Not only can you earn a small amount (typically) of compound
              interest on your savings, but by having emergency savings you may
              be able to avoid paying high interest rates on payday loans or
              credit card debt. 39% of Americans could not cover an emergency
              expense. Debt from credit cards or emergency or payday loans can
              easily cost you from 18% to 400% APR.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div id="button-container">
        <Link to={"/graph-2"}>
          <Button
            sx={{
              backgroundColor: "#e5e5e5",
              color: "#000000",
              height: "3rem",
              width: "12rem",
              fontSize: "1.5rem",
              padding: "0",

              "&:hover": {
                backgroundColor: "#00FF38",
              },
            }}
            id="btn"
          >
            Back
          </Button>
        </Link>
        <Link to={"/choice-3"}>
          <Button
            sx={{
              backgroundColor: "#e5e5e5",
              color: "#000000",
              height: "3rem",
              width: "12rem",
              fontSize: "1.5rem",
              padding: "0",

              "&:hover": {
                backgroundColor: "#00FF38",
              },
            }}
            id="btn"
          >
            Continue
          </Button>
        </Link>
      </div>
    </>
  );
}

export default Reflection2;
