import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { green } from "@mui/material/colors";
import "../../styles/reflection.css";
import think from "../../img/reflections/think.png";

function Reflection5() {
  return (
    <>
      <div id="container">
        <div className="subcontainer">
          <h1> Time to reflect! </h1>
        </div>
        <div className="subcontainer">
          <div id="image-container">
            <img src={think} alt="" id={"reflection2-img"} />
          </div>
          <div id="text-container">
            <h5>Did you sell or keep your investments? </h5>
            <p>
              At many points in time, it can be tempting to sell your
              investments either to try to time the market OR to use funds to
              make purchases for shorter term goals.
            </p>

            <p>
              Trying to time the market has been shown NOT to be a beneficial
              strategy for most average investors. Also, selling your
              investments early can have tax implications and can have a large
              impact on the value of your investments in the long-term.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div id="button-container">
        <Link to={"/graph-5"}>
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

export default Reflection5;
