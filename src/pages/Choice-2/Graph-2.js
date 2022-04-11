import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Graph from "../../components/graph/Graph";
import { PlayerContext } from "../../contexts/PlayerContext";
import { choice2, singleGraph2 } from "../../data/investmentData";
import INVESTMENTS_VEHICLES from "../../data/Investments";
import { randomEvent } from "../../data/pick-random-event";
import { formatter } from "../../formatter";
import usePlayer from "../../hooks/usePlayer";
import Button from "@mui/material/Button";
import SingleGraph from "../../components/graph/SingleGraph";
function GraphTwo() {
  const [shownGraph, setShownGraph] = useState(<Graph data={choice2} />);
  const { investments } = useContext(PlayerContext);
  const player = usePlayer();
  const eventTrigger = randomEvent();

  return (
    <>
      <div id="graph-container">
        <div id="main-container">
          <div className="sub-containers">
            <div className={"title"}>
              <h3>2005 Summary Report </h3>
              <p>
                This is the graph that you choose. It shows your investing
                progress throughout the year
              </p>
            </div>
            <div className={"graph"}>{shownGraph}</div>
            <div className={"investments"}>
              <h5 onClick={() => setShownGraph(<Graph data={choice2} />)}>
                Total Balance: {formatter.format(player.bank)}{" "}
              </h5>
              <div className="label-container">
                {investments.includes(INVESTMENTS_VEHICLES.SP) && (
                  <div
                    className={"investments-details-label"}
                    style={{ border: "1px solid #BE8EEE" }}
                    onClick={() =>
                      setShownGraph(
                        <SingleGraph data={singleGraph2[0]} color={"#BE8EEE"} />
                      )
                    }
                  >
                    <span style={{ color: "#BE8EEE" }}>
                      S&P 500: {formatter.format(choice2[1][3])}
                    </span>
                  </div>
                )}
                {investments.includes(INVESTMENTS_VEHICLES.retirement) && (
                  <div
                    className={"investments-details-label"}
                    style={{ border: "1px solid #BE8EEE" }}
                    onClick={() =>
                      setShownGraph(
                        <SingleGraph data={singleGraph2[1]} color={"#BE8EEE"} />
                      )
                    }
                  >
                    <span style={{ color: "#BE8EEE" }}>
                      Retirement: {formatter.format(choice2[0][3])}
                    </span>
                  </div>
                )}
                {investments.includes(INVESTMENTS_VEHICLES.CD) && (
                  <div
                    className={"investments-details-label"}
                    style={{ border: "1px solid #BE8EEE" }}
                    onClick={() =>
                      setShownGraph(
                        <SingleGraph data={singleGraph2[2]} color={"#FF5C00"} />
                      )
                    }
                  >
                    <span style={{ color: "#BE8EEE" }}>
                      CD: {formatter.format(choice2[2][3])}
                    </span>
                  </div>
                )}
                {investments.includes(INVESTMENTS_VEHICLES.inveesgo) && (
                  <div
                    className={"investments-details-label"}
                    style={{ border: "1px solid #BE8EEE" }}
                    onClick={() =>
                      setShownGraph(
                        <SingleGraph data={singleGraph2[1]} color={"#FF5050"} />
                      )
                    }
                  >
                    <span style={{ color: "#BE8EEE" }}>Inveesgo</span>
                  </div>
                )}
                {investments.includes(INVESTMENTS_VEHICLES.mutualFund) && (
                  <div
                    className={"investments-details-label"}
                    style={{ border: "1px solid #BE8EEE" }}
                    onClick={() =>
                      setShownGraph(
                        <SingleGraph data={singleGraph2[1]} color={"#F5F937"} />
                      )
                    }
                  >
                    <span style={{ color: "#BE8EEE" }}>Mutual Fund</span>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="sub-containers">
            <div className={"title"}>
              <h3>2005 What If Report </h3>
              <p>
                This is the graph if you choose the other option. It is here for
                future reference.
              </p>
            </div>
            <div className={"graph"}>
              <Graph data={choice2} />
            </div>
            <div className={"investments"}>
              <h5>Total Balance: {formatter.format(player.bank)} </h5>

              <div className="label-container">
                {investments.includes(INVESTMENTS_VEHICLES.SP) && (
                  <div
                    className={"investments-details-label"}
                    style={{ border: "1px solid #BE8EEE" }}
                  >
                    <span style={{ color: "#BE8EEE" }}>
                      S&P 500: {formatter.format(choice2[1][3])}
                    </span>
                  </div>
                )}
                {investments.includes(INVESTMENTS_VEHICLES.retirement) && (
                  <div
                    className={"investments-details-label"}
                    style={{ border: "1px solid #BE8EEE" }}
                  >
                    <span style={{ color: "#BE8EEE" }}>
                      Retirement: {formatter.format(choice2[0][3])}
                    </span>
                  </div>
                )}
                {investments.includes(INVESTMENTS_VEHICLES.CD) && (
                  <div
                    className={"investments-details-label"}
                    style={{ border: "1px solid #BE8EEE" }}
                  >
                    <span style={{ color: "#BE8EEE" }}>
                      CD: {formatter.format(choice2[1][3])}
                    </span>
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
          <Link to={"/choice-2"}>
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
          <Link to={eventTrigger ? `/event/${eventTrigger}` : "/reflection-2"}>
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

export default GraphTwo;

// <Buttons>
//     {eventTrigger ? (
//         <Link to={`/event/${eventTrigger}`}>
//             <Button label="Continue" />
//         </Link>
//     ) : (
//         <Link to="/choice-3">
//             <Button label="Continue" />
//         </Link>
//     )}
// </Buttons>
