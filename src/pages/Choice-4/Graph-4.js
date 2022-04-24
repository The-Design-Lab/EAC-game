import React from "react";
import GraphContainer from "../../components/graph/GraphContainer";
import { choice4, singleGraph4 } from "../../data/investmentData";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "../../styles/graphPages.css";

function GraphFour() {
  return (
    <>
      <div id="graph-container">
        <GraphContainer
          limit={5}
          singleGraph={singleGraph4}
          choice={choice4}
          year={2008}
        />
        <div id="button-container">
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
