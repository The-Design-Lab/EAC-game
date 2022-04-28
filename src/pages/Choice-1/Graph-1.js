// noinspection JSUnusedLocalSymbols
import React from "react";
import GraphContainer from "../../components/graph/GraphContainer";
import { choice1, singleGraph1 } from "../../data/investmentData";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "../../styles/graphPages.css";

function GraphOne() {
  return (
    <>
      <div id="graph-container">
        <GraphContainer
          year={2004}
          choice={choice1}
          singleGraph={singleGraph1}
          limit={2}
          graphYear={2005}
        />
        {/*<hr />*/}
        <div id="button-container">
          <Link to={"/reflection-1"}>
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
