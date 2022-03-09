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
import { PlayerContext } from "../../contexts/PlayerContext";

import CreateLine from "./CreateLine";

import useGetQuarterData from "../../hooks/useGetQuarterData";

const Graph = ({ data }) => {
  const { investments } = useContext(PlayerContext);

  const plotLines = () => {
    return investments.map((investment, index) =>
      CreateLine(investment, index)
    );
  };

  return (
    <ResponsiveContainer width="80%" height={220}>
      <LineChart
        data={useGetQuarterData(...data)}
        margin={{
          top: 20,
          right: 50,
          bottom: 20,
        }}
        style={{
          backgroundColor: "#0D0C0C",
          color: "white",
          padding: "0 10px 0 10px",
          // border: "1px solid white",
        }}
      >
        <CartesianGrid strokeDasharray="5 5" stroke="white" />
        <XAxis dataKey="name" stroke="White" />
        <YAxis stroke="#white" color="white" />
        <Tooltip />
        {/* Lines */}
        {plotLines()}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Graph;
