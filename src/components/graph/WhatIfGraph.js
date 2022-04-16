// noinspection ES6UnusedImports
import React from "react";
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

import useFakePlayer from "../../hooks/useFakePlayer";
import { formatter } from "../../formatter";

const WhatIfGraph = () => {
  const { graph } = useFakePlayer();

  return (
    <ResponsiveContainer width="80%" height={400} id={"responsive-container"}>
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
          tickFormatter={(value) => formatter.format(value)}
        />
        <Tooltip contentStyle={{ backgroundColor: "black" }} />
        {/* Lines */}
        <Line
          type="linear"
          dataKey={"amount"}
          stroke={"#ee3514"}
          strokeWidth="2"
          activeDot={false}
        />
        {/*{plotLines()}*/}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default WhatIfGraph;
