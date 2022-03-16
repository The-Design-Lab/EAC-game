import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { green } from "@mui/material/colors";
import "../../styles/reflection.css";
import emoji from "../../img/reflections/reflect1";

function Reflection1() {
  return (
    <>
      <div id="container">
        <div className="subcontainer">
          <h1> Time to reflect! </h1>
        </div>
        <div className="subcontainer">
          <div id="image-container">
            <img src={emoji} alt="" />
          </div>
          <div id="text-container">
            <h5>
              Did you choose to invest? Investing early can have a big impact!{" "}
            </h5>
            <p>
              For example, let’s consider a 21 year old that invests $100 per
              month until age 65 as compared to the 31 year old who invests $200
              per month (assuming a 7% APR). The 21 year old ended up with
              $145,000 more even though she invested $100 less per month!.{" "}
            </p>
            <h5>
              By choosing to invest, you did or would have secured your employer
              match.{" "}
            </h5>
            <p>
              If your employer contributes a certain amount to your retirement
              savings based on your annual contributions, try to take advantage
              and contribute at least that much yourself. The average employer
              matching contribution is approximately 3.5% of an employee's
              annual compensation - this is free money!
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div id="button-container">
        <Link to={"/graph-1"}>
          <Button
            sx={{
              backgroundColor: "#e5e5e5",
              color: "#000000",
              height: "3rem",
              width: "12rem",
              fontSize: "1.5rem",
              padding: "0",

              "&:hover": {
                backgroundColor: green[700],
              },
            }}
            id="btn"
          >
            Back
          </Button>
        </Link>
        <Link to={"/choice-2"}>
          <Button
            sx={{
              backgroundColor: "#e5e5e5",
              color: "#000000",
              height: "3rem",
              width: "12rem",
              fontSize: "1.5rem",
              padding: "0",

              "&:hover": {
                backgroundColor: green[700],
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

export default Reflection1;
