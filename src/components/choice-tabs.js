import React, { useContext } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import marketNews from "../data/marketNews";
import { formatter } from "../formatter";
import { GetGoalsAmount } from "../get-goals-amount";
import Graph from "./graph/Graph";
import { PlayerContext } from "../contexts/PlayerContext";
import INVESTMENTS_VEHICLES from "../data/Investments";

function ChoiceTabs({ year, player, choice }) {
  const { investments } = useContext(PlayerContext);

  // let SP = 0;
  // let retirement = 0;
  // let CD = 0;
  // let inveesgo = 0;
  // let mutualFund = 0;
  /**
   * TODO: Switch to determine the number inside the tags
   */

  return (
    <Tabs>
      <TabList id={"tabs-list"}>
        <Tab
          id={"firstTab"}
          className={"tabs toggledTab"}
          style={{
            listStyle: "none",
            width: "50%",
            padding: "0",
          }}
        >
          <div className={"tabs-title"}>Market News</div>
        </Tab>
        <Tab
          id={"secondTab"}
          className={"tabs closedTab"}
          style={{
            listStyle: "none",
            width: "50%",
          }}
        >
          <div className={"tabs-title"}>Investments</div>
        </Tab>
      </TabList>
      <TabPanel>
        <div id="marketNews-container">
          <div id="marketNews-details">
            <h5>Financial Market background - {year - 1}</h5>
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
                <Graph />{" "}
                <p style={{ fontSize: "1.3rem" }}>
                  Total Investment Balance:{" "}
                  {formatter.format(player.bank + player.investmentAccount)}
                </p>
              </>
            ) : (
              "You don’t have any investments yet. Play the game and watch your investments grow."
            )}
          </div>
          <div id="investment-details-top">
            {investments.includes(INVESTMENTS_VEHICLES.SP) && (
              <div className={"investments-details-label"}>
                <span style={{ color: "#BE8EEE" }}>S&P 500</span>
              </div>
            )}
            {investments.includes(INVESTMENTS_VEHICLES.retirement) && (
              <div className={"investments-details-label"}>
                <span style={{ color: "#BE8EEE" }}>Retirement</span>
              </div>
            )}
            {investments.includes(INVESTMENTS_VEHICLES.CD) && (
              <div className={"investments-details-label"}>
                <span style={{ color: "#f78da7" }}>CD</span>
              </div>
            )}
            {investments.includes(INVESTMENTS_VEHICLES.inveesgo) && (
              <div className={"investments-details-label"}>
                <span style={{ color: "#FF5050" }}>Inveesgo</span>
              </div>
            )}
            {investments.includes(INVESTMENTS_VEHICLES.mutualFund) && (
              <div className={"investments-details-label"}>
                <span style={{ color: "#F5F937" }}>Mutual Fund</span>
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
                    borderRadius: "15px",
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
