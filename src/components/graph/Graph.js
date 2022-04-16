// noinspection ES6UnusedImports
import React, { useContext } from "react";
import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  // Legend,
  ResponsiveContainer,
  Line,
} from "recharts";

import usePlayer from "../../hooks/usePlayer";

const Graph = () => {
  const { graph } = usePlayer();

  // const plotLines = () => {
  //   return investments.map((investment, index) =>
  //     CreateLine(investment, index)
  //   );
  // };

  return (
    <ResponsiveContainer width="80%" height={250} id={"responsive-container"}>
      <LineChart
        data={graph}
        style={{
          backgroundColor: "#0D0C0C",
          color: "white",
          paddingLeft: "0rem",
          paddingRight: "0rem",
          // border: "1px solid white",
        }}
      >
        <CartesianGrid strokeDasharray="5 5" stroke="white" />
        <XAxis dataKey="year" stroke="White" />
        <YAxis
          stroke="#white"
          label={{ fill: "white" }}
          type="number"
          domain={["dataMin", "dataMax"]}
        />
        <Tooltip contentStyle={{ backgroundColor: "black" }} />
        {/* Lines */}
        <Line
          type="linear"
          dataKey={"amount"}
          stroke={"#00FF38"}
          strokeWidth="2"
          activeDot={false}
        />
        {/*{plotLines()}*/}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Graph;
