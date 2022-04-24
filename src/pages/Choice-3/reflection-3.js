import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "../../styles/reflection.css";
import bulb from "../../img/reflections/ChoiceThreeReflection.gif";

function Reflection3() {
  return (
    <>
      <div id="reflection-container">
        <div className="subcontainer">
          <h1> Time to reflect! </h1>
        </div>
        <div className="subcontainer">
          <div id="image-container">
            <img src={bulb} alt="" id={"reflection2-img"} />
          </div>
          <div id="text-container">
            <h5>
              Did you choose to invest in the Invesgo stock or diversify by
              investing in a mutual fund?{" "}
            </h5>
            <p>
              Investing in a single stock can seem appealing, but overall, for
              most investors, mutual funds help to diversify investments and
              reduce risk given the volatility (or frequent large changes in the
              value) of individual stocks.
            </p>

            <p>
              Although the individual stock in this example had an increase in
              share price of 66% in one month, it also finished the 10 year time
              period at less than 1/4 of its 2004 price. When investing
              significant amounts of money for the long-term, most experts
              recommend the old saying "Don't put all your eggs in one basket"
              or in this case money in one investment.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div id="button-container">
        <Link to={"/choice-4"}>
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

export default Reflection3;
