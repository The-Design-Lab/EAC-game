import React from "react";
import GraphContainer from "../../components/graph/GraphContainer";
import { choice5, singleGraph5 } from "../../data/investmentData";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "../../styles/graphPages.css";

function GraphFive() {
  return (
    <>
      <div id="graph-container">
        <GraphContainer
          year={2013}
          choice={choice5}
          singleGraph={singleGraph5}
          limit={6}
        />
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
      </div>
      {/*<hr />*/}
    </>
  );
}

export default GraphFive;
