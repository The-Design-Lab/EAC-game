import React from "react";
import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Line,
} from "recharts";

const SingleGraph = ({ data, color }) => {
  return (
    <ResponsiveContainer width="80%" height={250}>
      <LineChart
        data={data}
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
          domain={["dataMin", "dataMax"]}
        />
        <Tooltip contentStyle={{ backgroundColor: "black" }} />
        {/* Lines */}
        {/*{plotLines()}*/}
        <Line type="monotone" dataKey="amount" stroke={color} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SingleGraph;
