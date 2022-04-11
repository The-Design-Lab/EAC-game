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
} from "recharts";
import CreateLine from "./CreateLine";
import { FakePlayerContext } from "../../contexts/FakePlayerContext";
import useGetFakeQuarterData from "../../hooks/useGetFakeQuarterData";

const WhatIfGraph = ({ data }) => {
  const { investments } = useContext(FakePlayerContext);

  const plotLines = () => {
    return investments.map((investment, index) =>
      CreateLine(investment, index)
    );
  };

  return (
    <ResponsiveContainer width="80%" height={250} id={"responsive-container"}>
      <LineChart
        data={useGetFakeQuarterData(...data)}
        style={{
          backgroundColor: "#0D0C0C",
          color: "white",
          paddingLeft: "0rem",
          paddingRight: "0rem",
          // border: "1px solid white",
        }}
      >
        <CartesianGrid strokeDasharray="5 5" stroke="white" />
        <XAxis dataKey="name" stroke="White" />
        <YAxis
          stroke="#white"
          label={{ fill: "white" }}
          type="number"
          domain={["dataMin", "dataMax"]}
        />
        <Tooltip contentStyle={{ backgroundColor: "black" }} />
        {/* Lines */}
        {plotLines()}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default WhatIfGraph;
