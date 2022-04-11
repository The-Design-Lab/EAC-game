import React from "react";
import { Line } from "recharts";
import CustomizedDot from "./CustomizedDot";

function CreateLine(title, index) {
  const colors = ["#BE8EEE", "#F9BA7F", "#FF5C00", "#FF5050", "#FF5050"];
  return (
    <Line
      type="linear"
      dataKey={title}
      stroke={colors[index]}
      strokeWidth="2"
      dot={<CustomizedDot color={colors[index]} />}
      activeDot={false}
    />
  );
}

export default CreateLine;
