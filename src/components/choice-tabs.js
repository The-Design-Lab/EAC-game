import React, { useContext } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import marketNews from "../data/marketNews";
import { formatter } from "../formatter";
import { GetGoalsAmount } from "../get-goals-amount";
import { Typography } from "@mui/material";
import Graph from "./graph/Graph";
import { PlayerContext } from "../contexts/PlayerContext";
import INVESTMENTS_VEHICLES from "../data/Investments";

function ChoiceTabs({ year, player, choice }) {
  const { investments } = useContext(PlayerContext);
  return (
    <Tabs>
      <TabList id={"tabs-list"}>
        <Tab
          id={"firstTab"}
          className={"tabs toggledTab"}
          style={{
            listStyle: "none",
            width: "50%",
            backgroundColor: "#0D0C0C",
            borderRadius: "10px",
            margin: "0.5rem",
          }}
        >
          <div className={"class1"}>
            <Typography variant={"h6"}>Market</Typography>
          </div>
        </Tab>
        <Tab
          id={"secondTab"}
          className={"tabs closedTab"}
          style={{
            listStyle: "none",
            width: "50%",
            backgroundColor: "#2D2D2D",
            borderRadius: "10px",
            margin: "0.5rem",
          }}
        >
          <div className={"class1"}>
            <Typography variant={"h6"}>Investments</Typography>
          </div>
        </Tab>
      </TabList>
      <TabPanel>
        <div id="marketNews-container">
          <div id="news-details">
            <h5>Financial Market in 2003</h5>
            <div>
              <ul id={"marketNews-list"}>
                {marketNews[year].map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <div id="investments-container">
          <div id="investment-graph">
            {choice ? (
              <>
                <Graph data={choice} />{" "}
                <p style={{ fontSize: "1.3rem" }}>
                  Total Balance: {player.bank}
                </p>
              </>
            ) : (
              "You don’t have any investments yet. Play the game and watch your investments grow."
            )}
          </div>
          <div id="investment-details-top">
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
          <div id="investment-details-bottom">
            <div>
              <span>COST OF GOALS: </span>
              {GetGoalsAmount(player)}
            </div>
            <div>
              <span>SALARY: </span> {formatter.format(player.salary)}
            </div>
          </div>
          <div id={"investment-goals"}>
            <div>
              YOUR GOALS:{" "}
              {player.goals.map((goal) => (
                <div
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    width: "3rem",
                    display: "inline-block",
                    height: "fit-content",
                    borderRadius: "5%",
                    fontSize: "0.9rem",
                    padding: "1px",
                    margin: "0.5rem",
                    textAlign: "center",
                  }}
                >
                  {goal.tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </TabPanel>
    </Tabs>
  );
}

export default ChoiceTabs;
