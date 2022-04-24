import React from "react";
import { choice3, singleGraph3 } from "../../data/investmentData";
import GraphContainer from "../../components/graph/GraphContainer";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "../../styles/graphPages.css";

function GraphThree() {
  return (
    <>
      <div id="graph-container">
        <GraphContainer
          year={2006}
          choice={choice3}
          singleGraph={singleGraph3}
          limit={4}
        />
        <div id="button-container">
          <Link to={"/reflection-3"}>
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

export default GraphThree;
