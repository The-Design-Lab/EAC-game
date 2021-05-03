import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const data = [
  {
    name: 'Q1',
    'S&P': 10158,
  },
  {
    name: 'Q2',
    'S&P': 9891,
  },
  {
    name: 'Q3',
    'S&P': 9795,
  },
  {
    name: 'Q4',
    'S&P': 10595,
  },
]

const CustomizedDot = ({ cx, cy, color }) => {
  return (
    <svg
      x={cx - 10}
      y={cy - 10}
      width={20}
      height={20}
      fill={color}
      stroke="#000"
      stroke-width="3"
      viewBox="0 0 50 50"
    >
      <path d="M37.85 44.2l-13.69-7.18-13.68 7.21 2.6-15.24L2 18.21l15.3-2.24L24.13 2.1l6.85 13.86 15.3 2.21-11.06 10.8z" />
    </svg>
  )
}

const Graph = () => {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <LineChart
        data={data}
        margin={{
          top: 20,
          right: 50,
          bottom: 20,
        }}
        style={{
          backgroundColor: 'white',
          padding: '0 10px 0 10px',
          border: '2px solid black',
        }}
      >
        <CartesianGrid strokeDasharray="5 5" stroke="#000" />
        <XAxis dataKey="name" stroke="#000" />
        <YAxis stroke="#000" />
        <Tooltip />
        <Legend />
        {/* Lines */}
        <Line
          type="linear"
          dataKey="S&P"
          stroke="#f96263"
          strokeWidth="2"
          dot={<CustomizedDot color="#f96263" />}
          activeDot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default Graph
