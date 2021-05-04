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

const CreateLine = (title, index) => {
  const colors = ['#f96263', '#F9BA7F', '#E6E547', '#BBC2FF']
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

const Graph = () => {
  const { investments, choices } = useContext(PlayerContext)
  console.log(investments.includes('S&P'))

  const getLineData = () => {
    return investments.map((investment, index) => {
      return CreateLine(investment, index)
    })
  }

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

        {getLineData()}
      </LineChart>
    </ResponsiveContainer>
  )
}

export default Graph
