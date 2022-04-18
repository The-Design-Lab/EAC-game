import React, { useContext, useState } from "react";
import Graph from "./Graph";
import { formatter } from "../../formatter";
import INVESTMENTS_VEHICLES from "../../data/Investments";
import SingleGraph from "./SingleGraph";
import WhatIfGraph from "./WhatIfGraph";
import { PlayerContext } from "../../contexts/PlayerContext";
import { FakePlayerContext } from "../../contexts/FakePlayerContext";
import usePlayer from "../../hooks/usePlayer";
import useFakePlayer from "../../hooks/useFakePlayer";
import useGenerateGraphData from "../../hooks/useGenerateGraphData";

const GraphContainer = ({ year, limit, choice, singleGraph }) => {
  const { investments } = useContext(PlayerContext);
  const fakeContext = useContext(FakePlayerContext);
  const player = usePlayer();
  const fakePlayer = useFakePlayer();
  useGenerateGraphData(year, player, fakePlayer, limit);
  const [shownGraph, setShownGraph] = useState(<Graph />);
  const [shownWhatIfGraph, setShownWhatIfGraph] = useState(<WhatIfGraph />);

  return (
    <div id="main-container">
      <div className="sub-containers">
        <div className={"title"}>
          <h3>{year} Summary Report </h3>
          <p>
            This is graphs shows your investing progress throughout the year.
          </p>
        </div>
        <div className={"graph"}>{shownGraph}</div>
        <div className={"investments"}>
          <h5
            className={"investments-details-label"}
            style={{ border: "1px solid white" }}
            onClick={() => setShownGraph(<Graph />)}
          >
            Total Balance: {formatter.format(player.bank)}{" "}
          </h5>
          <div className="label-container">
            {investments.includes(INVESTMENTS_VEHICLES.SP) && (
              <div
                className={"investments-details-label"}
                style={{ border: "1px solid #BE8EEE" }}
                onClick={() =>
                  setShownGraph(
                    <SingleGraph data={singleGraph[0]} color={"#BE8EEE"} />
                  )
                }
              >
                <span style={{ color: "#BE8EEE" }}>
                  S&P 500: {formatter.format(choice[1].slice(-1))}
                </span>
              </div>
            )}
            {investments.includes(INVESTMENTS_VEHICLES.retirement) && (
              <div
                className={"investments-details-label"}
                style={{ border: "1px solid #649ee5" }}
                onClick={() =>
                  setShownGraph(
                    <SingleGraph data={singleGraph[1]} color={"#649ee5"} />
                  )
                }
              >
                <span style={{ color: "#649ee5" }}>
                  Retirement: {formatter.format(choice[0].slice(-1))}
                </span>
              </div>
            )}
            {investments.includes(INVESTMENTS_VEHICLES.CD) && (
              <div
                className={"investments-details-label"}
                style={{ border: "1px solid #f78da7" }}
                onClick={() =>
                  setShownGraph(
                    <SingleGraph data={singleGraph[2]} color={"#f78da7"} />
                  )
                }
              >
                <span style={{ color: "#f78da7" }}>
                  CD: {formatter.format(choice[2].slice(-1))}
                </span>
              </div>
            )}
            {investments.includes(INVESTMENTS_VEHICLES.inveesgo) && (
              <div
                className={"investments-details-label"}
                style={{ border: "1px solid #FF5050" }}
                onClick={() =>
                  setShownGraph(
                    <SingleGraph data={singleGraph[3]} color={"#FF5050"} />
                  )
                }
              >
                <span style={{ color: "#FF5050" }}>
                  Inveesgo: {formatter.format(choice[3].slice(-1))}
                </span>
              </div>
            )}
            {investments.includes(INVESTMENTS_VEHICLES.mutualFund) && (
              <div
                className={"investments-details-label"}
                style={{ border: "1px solid #F5F937" }}
                onClick={() =>
                  setShownGraph(
                    <SingleGraph data={singleGraph[4]} color={"#F5F937"} />
                  )
                }
              >
                <span style={{ color: "#F5F937" }}>
                  Mutual Fund: {formatter.format(choice[4].slice(-1))}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="sub-containers">
        <div className={"title"}>
          <h3>{year} What If Report </h3>
          <p>
            This graph charts what would have happened if you made the other
            choice.
          </p>
        </div>
        <div className={"graph"}>{shownWhatIfGraph}</div>
        <div className={"investments"}>
          <h5
            className={"investments-details-label"}
            style={{ border: "1px solid white" }}
            onClick={() => setShownWhatIfGraph(<WhatIfGraph />)}
          >
            Potential Balance: {formatter.format(fakePlayer.bank)}{" "}
          </h5>
          <div className="label-container">
            {fakeContext.investments.includes(INVESTMENTS_VEHICLES.SP) && (
              <div
                className={"investments-details-label"}
                style={{ border: "1px solid #BE8EEE" }}
                onClick={() =>
                  setShownWhatIfGraph(
                    <SingleGraph data={singleGraph[0]} color={"#BE8EEE"} />
                  )
                }
              >
                <span style={{ color: "#BE8EEE" }}>
                  S&P 500: {formatter.format(choice[1].slice(-1))}
                </span>
              </div>
            )}
            {fakeContext.investments.includes(
              INVESTMENTS_VEHICLES.retirement
            ) && (
              <div
                className={"investments-details-label"}
                style={{ border: "1px solid #649ee5" }}
                onClick={() =>
                  setShownWhatIfGraph(
                    <SingleGraph data={singleGraph[1]} color={"#649ee5"} />
                  )
                }
              >
                <span style={{ color: "#649ee5" }}>
                  Retirement: {formatter.format(choice[0].slice(-1))}
                </span>
              </div>
            )}
            {fakeContext.investments.includes(INVESTMENTS_VEHICLES.CD) && (
              <div
                className={"investments-details-label"}
                style={{ border: "1px solid #F78DA7" }}
                onClick={() =>
                  setShownWhatIfGraph(
                    <SingleGraph data={singleGraph[2]} color={"#F78DA7"} />
                  )
                }
              >
                <span style={{ color: "#F78DA7" }}>
                  CD: {formatter.format(choice[2].slice(-1))}
                </span>
              </div>
            )}
            {fakeContext.investments.includes(
              INVESTMENTS_VEHICLES.inveesgo
            ) && (
              <div
                className={"investments-details-label"}
                style={{ border: "1px solid #FF5050" }}
                onClick={() =>
                  setShownWhatIfGraph(
                    <SingleGraph data={singleGraph[3]} color={"#FF5050"} />
                  )
                }
              >
                <span style={{ color: "#FF5050" }}>
                  Inveesgo: {formatter.format(choice[3].slice(-1))}
                </span>
              </div>
            )}
            {fakeContext.investments.includes(
              INVESTMENTS_VEHICLES.mutualFund
            ) && (
              <div
                className={"investments-details-label"}
                style={{ border: "1px solid #F5F937" }}
                onClick={() =>
                  setShownWhatIfGraph(
                    <SingleGraph data={singleGraph[4]} color={"#F5F937"} />
                  )
                }
              >
                <span style={{ color: "#F5F937" }}>
                  Mutual Fund: {formatter.format(choice[4].slice(-1))}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphContainer;
