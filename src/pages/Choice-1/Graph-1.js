// noinspection JSUnusedLocalSymbols

import React, { useContext } from "react";
// import styled from "styled-components";
import Graph from "../../components/graph/Graph";
import { PlayerContext } from "../../contexts/PlayerContext";
import { choice1 } from "../../data/investmentData";
import "../../styles/graphPages.css";
import usePlayer from "../../hooks/usePlayer";
import { formatter } from "../../formatter";
// const InvestmentName = styled.div`
//   box-shadow: var(--bevel-default);
//   width: 150px;
//   padding: 15px 20px;
//   text-align: center;
// `;
// const InvestmentGroup = styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   gap: 10px;
// `;
//
// const Buttons = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-top: 20px;
// `;

function GraphOne() {
  const { investments } = useContext(PlayerContext);
  const player = usePlayer();
  console.log(investments);

  return (
    <div id="main-container">
      <div className="sub-containers">
        <div className={"title"}>
          <h3>2003 Summary Report </h3>
          <p>
            This is the graph that you choose. It shows your investing progress
            throughout the year
          </p>
        </div>
        <div className={"graph"}>
          <Graph data={choice1} />
        </div>
        <div className={"investments"}>
          <h4>Current investments: </h4>
          {/*{investments.includes(INVESTMENTS_VEHICLES.SP) && <div>S&P 500</div>}*/}
          {/*{investments.includes(INVESTMENTS_VEHICLES.retirement) && (*/}
          {/*  <div>Retirement</div>*/}
          {/*)}*/}
          <div className="label-container">
            <div className="investments-labels"> S&P 500</div>
            <div className="investments-labels">Retirement</div>
            <div className="investments-labels">Invesgoo</div>
            <div className="investments-labels">Mutual Fund</div>
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
          <h4>Current investments: </h4>
          {/*{investments.includes(INVESTMENTS_VEHICLES.SP) && <div>S&P 500</div>}*/}
          {/*{investments.includes(INVESTMENTS_VEHICLES.retirement) && (*/}
          {/*  <div>Retirement</div>*/}
          {/*)}*/}
          <div className="label-container">
            <div className="investments-labels"> S&P 500</div>
            <div className="investments-labels">Retirement</div>
            <div className="investments-labels">Invesgoo</div>
            <div className="investments-labels">Mutual Fund</div>
          </div>
        </div>
        <div className={"account"}>
          <div className="account-information">
            <h4>Your Account Information: </h4>
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
