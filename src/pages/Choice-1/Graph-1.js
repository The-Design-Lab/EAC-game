// noinspection JSUnusedLocalSymbols
import React, { useContext } from "react";
// import styled from "styled-components";
import Graph from "../../components/graph/Graph";
import { PlayerContext } from "../../contexts/PlayerContext";
import { choice1 } from "../../data/investmentData";
import "../../styles/graphPages.css";
import usePlayer from "../../hooks/usePlayer";
import { formatter } from "../../formatter";
import { green } from "@mui/material/colors";
import Button from "@mui/material/Button";
import INVESTMENTS_VEHICLES from "../../data/Investments";
import { Link } from "react-router-dom";

function GraphOne() {
  const { investments } = useContext(PlayerContext);
  const player = usePlayer();
  console.log(investments);

  return (
    <>
      <div id="main-container">
        <div className="sub-containers">
          <div className={"title"}>
            <h3>2003 Summary Report </h3>
            <p>
              This is the graph that you choose. It shows your investing
              progress throughout the year
            </p>
          </div>
          <div className={"graph"}>
            <Graph data={choice1} />
          </div>
          <div className={"investments"}>
            <h4>Current investments: </h4>
            <div className="label-container">
              <ul>
                {investments.includes(INVESTMENTS_VEHICLES.SP) && (
                  <li className={"li-lines"}>S&P 500</li>
                )}
                {investments.includes(INVESTMENTS_VEHICLES.retirement) && (
                  <li className={"li-lines"}>Retirement</li>
                )}
              </ul>
            </div>
          </div>
          <div className={"account"}>
            <div className="account-information">
              <h4>Your Account Information: </h4>
              <div className="account-information-top">
                <div className="account-information-top-label">
                  Salary: {formatter.format(player.salary)}
                </div>
                <div className="account-information-top-label">
                  Total Balance: {formatter.format(player.bank)}
                </div>
                <div className="account-information-top-label">
                  Goals: $232.500
                </div>
              </div>
            </div>
            <div className="account-information-bottom">
              <div id="account-information-bottom-header">
                <span style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
                  Your investment choices:{" "}
                </span>
                {player.goals.map((goal) => (
                  <span className={"goals"}>
                    <b> {goal.name} </b>
                  </span>
                ))}{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="sub-containers">
          <div className={"title"}>
            <h3>2003 What If Report </h3>
            <p>
              This is the graph if you choose the other option. It is here for
              future reference.
            </p>
          </div>
          <div className={"graph"}>
            <Graph data={choice1} />
          </div>
          <div className={"investments"}>
            <h4>What-If investments: </h4>

            <div className="label-container">
              {investments.includes(INVESTMENTS_VEHICLES.SP) && (
                <div>S&P 500</div>
              )}
              {investments.includes(INVESTMENTS_VEHICLES.retirement) && (
                <div>Retirement</div>
              )}
            </div>
          </div>
          <div className={"account"}>
            <div className="account-information">
              <h4>Your What-If Account Information: </h4>
              <div className="account-information-top">
                <div className="account-information-top-label">
                  Salary: $60.000
                </div>
                <div className="account-information-top-label">
                  Total Balance: $79.000
                </div>
                <div className="account-information-top-label">
                  Goals: $232.500
                </div>
              </div>
            </div>
            <div className="account-information-bottom">
              <div id="account-information-bottom-header">
                <span style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
                  Your investment choices:{" "}
                </span>
                {player.goals.map((goal) => (
                  <span className={"goals"}>
                    <b> {goal.name} </b>
                  </span>
                ))}{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div id="button-container">
        <Link to={"/choice-1"}>
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
        <Link to={"/reflection-1"}>
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

export default GraphOne;

// <div>
// <Title>2004 Summary</Title>
// <hr />
// <Grid>
//     <Graph data={choice1} />
//     <Investments>
//         <h5>Investments</h5>
//         <hr />
//         {/* render condtional investment labels */}
//         <InvestmentGroup>
//             {investments.includes(INVESTMENTS_VEHICLES.SP) && (
//
//                 <InvestmentName style={{ backgroundColor: '#f96263' }}>
//                     S&P 500
//                 </InvestmentName>
//             )}
//             {investments.includes(INVESTMENTS_VEHICLES.retirement) && (
//
//                 <InvestmentName style={{ backgroundColor: '#F9BA7F' }}>
//                     Retirement
//                 </InvestmentName>
//             )}
//         </InvestmentGroup>
//     </Investments>
// </Grid>
// <Buttons>
//     <Link to="/choice-2">
//         <Button label="Continue" />
//     </Link>
// </Buttons>
// </div>
