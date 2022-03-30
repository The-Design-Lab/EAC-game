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
    <ResponsiveContainer width="80%" height={150}>
      <LineChart
        data={useGetQuarterData(...data)}
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
        <YAxis stroke="#white" label={{ fill: "white" }} />
        <Tooltip />
        {/* Lines */}
        {plotLines()}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Graph;
