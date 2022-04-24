import React from "react";
import GraphContainer from "../../components/graph/GraphContainer";
import { choice2, singleGraph2 } from "../../data/investmentData";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { randomEvent } from "../../data/pick-random-event";
import "../../styles/graphPages.css";

function GraphTwo() {
  const eventTrigger = randomEvent();

  return (
    <>
      <div id="graph-container">
        <GraphContainer
          limit={3}
          singleGraph={singleGraph2}
          choice={choice2}
          year={2005}
        />
        <div id="button-container">
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
