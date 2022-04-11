import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Graph from "../../components/graph/Graph";
import { PlayerContext } from "../../contexts/PlayerContext";
import { choice4, singleGraph4 } from "../../data/investmentData";
import INVESTMENTS_VEHICLES from "../../data/Investments";
import { formatter } from "../../formatter";
import usePlayer from "../../hooks/usePlayer";
import Button from "@mui/material/Button";
import SingleGraph from "../../components/graph/SingleGraph";
import useFakePlayer from "../../hooks/useFakePlayer";
import WhatIfGraph from "../../components/graph/WhatIfGraph";

function GraphFour() {
  const [shownGraph, setShownGraph] = useState(<Graph data={choice4} />);
  const { investments } = useContext(PlayerContext);
  const player = usePlayer();
  const fakePlayer = useFakePlayer();

  return (
    <>
      <div id="graph-container">
        <div id="main-container">
          <div className="sub-containers">
            <div className={"title"}>
              <h3>2008 Summary Report </h3>
              <p>
                This is the graph that you choose. It shows your investing
                progress throughout the year
              </p>
            </div>
            <div className={"graph"}>{shownGraph}</div>
            <div className={"investments"}>
              <h5 onClick={() => setShownGraph(<Graph data={choice4} />)}>
                Total Balance: {formatter.format(player.bank)}{" "}
              </h5>
              <div className="label-container">
                {investments.includes(INVESTMENTS_VEHICLES.SP) && (
                  <div
                    className={"investments-details-label"}
                    style={{ border: "1px solid #BE8EEE" }}
                    onClick={() =>
                      setShownGraph(
                        <SingleGraph data={singleGraph4[0]} color={"#BE8EEE"} />
                      )
                    }
                  >
                    <span style={{ color: "#BE8EEE" }}>
                      S&P 500: {formatter.format(choice4[1][11])}
                    </span>
                  </div>
                )}
                {investments.includes(INVESTMENTS_VEHICLES.retirement) && (
                  <div
                    className={"investments-details-label"}
                    style={{ border: "1px solid #BE8EEE" }}
                    onClick={() =>
                      setShownGraph(
                        <SingleGraph data={singleGraph4[1]} color={"#BE8EEE"} />
                      )
                    }
                  >
                    <span style={{ color: "#BE8EEE" }}>
                      Retirement: {formatter.format(choice4[0][11])}
                    </span>
                  </div>
                )}
                {investments.includes(INVESTMENTS_VEHICLES.CD) && (
                  <div
                    className={"investments-details-label"}
                    style={{ border: "1px solid #BE8EEE" }}
                    onClick={() =>
                      setShownGraph(
                        <SingleGraph data={singleGraph4[2]} color={"#FF5C00"} />
                      )
                    }
                  >
                    <span style={{ color: "#BE8EEE" }}>
                      CD: {formatter.format(choice4[2][11])}
                    </span>
                  </div>
                )}
                {investments.includes(INVESTMENTS_VEHICLES.inveesgo) && (
                  <div
                    className={"investments-details-label"}
                    style={{ border: "1px solid #BE8EEE" }}
                    onClick={() =>
                      setShownGraph(
                        <SingleGraph data={singleGraph4[3]} color={"#FF5050"} />
                      )
                    }
                  >
                    <span style={{ color: "#BE8EEE" }}>
                      Inveesgo: {formatter.format(choice4[3][11])}
                    </span>
                  </div>
                )}
                {investments.includes(INVESTMENTS_VEHICLES.mutualFund) && (
                  <div
                    className={"investments-details-label"}
                    style={{ border: "1px solid #BE8EEE" }}
                    onClick={() =>
                      setShownGraph(
                        <SingleGraph data={singleGraph4[4]} color={"#F5F937"} />
                      )
                    }
                  >
                    <span style={{ color: "#BE8EEE" }}>
                      Mutual Fund: {formatter.format(choice4[4][11])}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="sub-containers">
            <div className={"title"}>
              <h3>2008 What If Report </h3>
              <p>
                This is the graph if you choose the other option. It is here for
                future reference.
              </p>
            </div>
            <div className={"graph"}>
              <WhatIfGraph data={choice4} />
            </div>
            <div className={"investments"}>
              <h5>Total Balance: {formatter.format(fakePlayer.bank)} </h5>

              <div className="label-container">
                {investments.includes(INVESTMENTS_VEHICLES.SP) && (
                  <div
                    className={"investments-details-label"}
                    style={{ border: "1px solid #BE8EEE" }}
                  >
                    <span style={{ color: "#BE8EEE" }}>S&P 500</span>
                  </div>
                )}
                {investments.includes(INVESTMENTS_VEHICLES.retirement) && (
                  <div
                    className={"investments-details-label"}
                    style={{ border: "1px solid #BE8EEE" }}
                  >
                    <span style={{ color: "#BE8EEE" }}>Retirement</span>
                  </div>
                )}
                {investments.includes(INVESTMENTS_VEHICLES.CD) && (
                  <div
                    className={"investments-details-label"}
                    style={{ border: "1px solid #BE8EEE" }}
                  >
                    <span style={{ color: "#BE8EEE" }}>CD</span>
                  </div>
                )}
                {investments.includes(INVESTMENTS_VEHICLES.inveesgo) && (
                  <div
                    className={"investments-details-label"}
                    style={{ border: "1px solid #BE8EEE" }}
                  >
                    <span style={{ color: "#BE8EEE" }}>Inveesgo</span>
                  </div>
                )}
                {investments.includes(INVESTMENTS_VEHICLES.mutualFund) && (
                  <div
                    className={"investments-details-label"}
                    style={{ border: "1px solid #BE8EEE" }}
                  >
                    <span style={{ color: "#BE8EEE" }}>Mutual Fund</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div id="button-container">
          <Link to={"/choice-4"}>
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
          <Link to={"/reflection-4"}>
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
      </div>
      {/*<hr />*/}
    </>
  );
}

export default GraphFour;
