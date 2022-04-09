import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Graph from "../../components/graph/Graph";
import { PlayerContext } from "../../contexts/PlayerContext";
import { choice5 } from "../../data/investmentData";
import INVESTMENTS_VEHICLES from "../../data/Investments";
import { formatter } from "../../formatter";
import Button from "@mui/material/Button";
import usePlayer from "../../hooks/usePlayer";

function GraphFive() {
  const { investments } = useContext(PlayerContext);
  console.log(investments);
  const player = usePlayer();

  return (
    <>
      <div id="container">
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
              <Graph data={choice5} />
            </div>
            <div className={"investments"}>
              <h5>Total Balance: {formatter.format(player.bank)} </h5>
              <div className="label-container">
                {investments.includes(INVESTMENTS_VEHICLES.SP) && (
                  <div
                    className={"investments-details-label"}
                    style={{ border: "1px solid #BE8EEE" }}
                  >
                    <span style={{ marginLeft: "0.3rem", color: "#BE8EEE" }}>
                      S&P 500
                    </span>
                  </div>
                )}
                {investments.includes(INVESTMENTS_VEHICLES.retirement) && (
                  <div
                    className={"investments-details-label"}
                    style={{ border: "1px solid #BE8EEE" }}
                  >
                    <span style={{ marginLeft: "0.3rem", color: "#BE8EEE" }}>
                      Retirement
                    </span>
                  </div>
                )}
                {investments.includes(INVESTMENTS_VEHICLES.CD) && (
                  <div
                    className={"investments-details-label"}
                    style={{ border: "1px solid #BE8EEE" }}
                  >
                    <span style={{ marginLeft: "0.3rem", color: "#BE8EEE" }}>
                      CD
                    </span>
                  </div>
                )}
                {investments.includes(INVESTMENTS_VEHICLES.inveesgo) && (
                  <div
                    className={"investments-details-label"}
                    style={{ border: "1px solid #BE8EEE" }}
                  >
                    <span style={{ marginLeft: "0.3rem", color: "#BE8EEE" }}>
                      Inveesgo
                    </span>
                  </div>
                )}
                {investments.includes(INVESTMENTS_VEHICLES.mutualFund) && (
                  <div
                    className={"investments-details-label"}
                    style={{ border: "1px solid #BE8EEE" }}
                  >
                    <span style={{ marginLeft: "0.3rem", color: "#BE8EEE" }}>
                      Mutual Fund
                    </span>
                  </div>
                )}
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
              <Graph data={choice5} />
            </div>
            <div className={"investments"}>
              <h5>Total Balance: {formatter.format(player.bank)} </h5>

              <div className="label-container">
                {investments.includes(INVESTMENTS_VEHICLES.SP) && (
                  <div
                    className={"investments-details-label"}
                    style={{ border: "1px solid #BE8EEE" }}
                  >
                    <span style={{ marginLeft: "0.3rem", color: "#BE8EEE" }}>
                      S&P 500
                    </span>
                  </div>
                )}
                {investments.includes(INVESTMENTS_VEHICLES.retirement) && (
                  <div
                    className={"investments-details-label"}
                    style={{ border: "1px solid #BE8EEE" }}
                  >
                    <span style={{ marginLeft: "0.3rem", color: "#BE8EEE" }}>
                      Retirement
                    </span>
                  </div>
                )}
                {investments.includes(INVESTMENTS_VEHICLES.CD) && (
                  <div
                    className={"investments-details-label"}
                    style={{ border: "1px solid #BE8EEE" }}
                  >
                    <span style={{ marginLeft: "0.3rem", color: "#BE8EEE" }}>
                      CD
                    </span>
                  </div>
                )}
                {investments.includes(INVESTMENTS_VEHICLES.inveesgo) && (
                  <div
                    className={"investments-details-label"}
                    style={{ border: "1px solid #BE8EEE" }}
                  >
                    <span style={{ marginLeft: "0.3rem", color: "#BE8EEE" }}>
                      Inveesgo
                    </span>
                  </div>
                )}
                {investments.includes(INVESTMENTS_VEHICLES.mutualFund) && (
                  <div
                    className={"investments-details-label"}
                    style={{ border: "1px solid #BE8EEE" }}
                  >
                    <span style={{ marginLeft: "0.3rem", color: "#BE8EEE" }}>
                      Mutual Fund
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div id="button-container">
        <Link to={"/choice-5"}>
          <Button
            sx={{
              backgroundColor: "#e5e5e5",
              color: "#000000",
              height: "2.5rem",
              width: "10rem",
              fontSize: "1.2rem",
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
        <Link to={"/reflection-5"}>
          <Button
            sx={{
              backgroundColor: "#e5e5e5",
              color: "#000000",
              height: "2.5rem",
              width: "10rem",
              fontSize: "1.2rem",
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

export default GraphFive;
