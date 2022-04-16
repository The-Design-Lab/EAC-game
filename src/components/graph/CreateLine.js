import React from "react";
import { Line } from "recharts";
import CustomizedDot from "./CustomizedDot";

function CreateLine(title) {
  // const colors = ["#BE8EEE", "#F9BA7F", "#FF5C00", "#FF5050", "#FF5050"];
  return (
    <Line
      type="linear"
      dataKey={title.name}
      stroke={title.color}
      strokeWidth="2"
      dot={<CustomizedDot color={title.color} />}
      activeDot={false}
    />
  );
}

export default CreateLine;
