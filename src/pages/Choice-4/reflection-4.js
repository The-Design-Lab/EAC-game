import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "../../styles/reflection.css";
import bill from "../../img/reflections/bill.png";

function Reflection4() {
  return (
    <>
      <div id="container">
        <div className="subcontainer">
          <h1> Time to reflect! </h1>
        </div>
        <div className="subcontainer">
          <div id="image-container">
            <img src={bill} alt="" id={"reflection2-img"} />
          </div>
          <div id="text-container">
            <h5>Did you sell or hold? Did you try to “time the market”? </h5>
            <p>
              It is understandably scary when the market declines. Human nature
              often leads investors to sell when the market dips, locking in
              losses, and buying when stock prices are at highs, potentially
              limiting gains. If you have a long-term investment horizon and an
              emergency fund, think carefully before you change your long-term
              investment strategy due to short-term events in the market.
            </p>

            <p>
              Times when the stock market declines by 20% or more from a recent
              high are called "bear markets". Looking at the S&P 500 Index,
              there have been 16 bear markets since 1926. That's one every 6
              years on average. The bear markets last an average of 22 months,
              and the market typically loses an average of 39%. There is no
              guarantee this is what will happen in the future but this is what
              has happened over the past almost 100 years.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div id="button-container">
        <Link to={"/graph-4"}>
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
        <Link to={"/choice-5"}>
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

export default Reflection4;
