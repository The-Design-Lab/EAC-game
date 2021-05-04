import React, { useContext } from 'react'
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
import { PlayerContext } from '../contexts/PlayerContext'

import investmentData from '../data/investmentData'

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

const CreateLine = (title, color) => {
  return (
    <Line
      type="linear"
      dataKey={title}
      stroke={color}
      strokeWidth="2"
      dot={<CustomizedDot color={color} />}
      activeDot={false}
    />
  )
}

const Graph = () => {
  const { investments, choices } = useContext(PlayerContext)
  console.log(investments.includes('S&P'))

  return (
    <ResponsiveContainer width="100%" height={500}>
      <LineChart
        data={investmentData[0]}
        // data={investmentData[choices.length - 1]}
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

        {CreateLine('S&P', '#f96263')}
        {CreateLine('retirement', '#F9BA7F')}
      </LineChart>
    </ResponsiveContainer>
  )
}

export default Graph
