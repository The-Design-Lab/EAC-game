import React from 'react'
import { Line } from 'recharts'
import CustomizedDot from './CustomizedDot'

function CreateLine(title, index) {
  const colors = ['#f96263', '#F9BA7F', '#E6E547', '#BBC2FF', 'BBC2FF']
  return (
    <Line
      type="linear"
      dataKey={title}
      stroke={colors[index]}
      strokeWidth="2"
      dot={<CustomizedDot color={colors[index]} />}
      activeDot={false}
    />
  )
}

export default CreateLine
