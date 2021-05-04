import React, { useContext } from 'react'
import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { PlayerContext } from '../../contexts/PlayerContext'

import CreateLine from './CreateLine'

// import output from '../data/investmentData'
import useGetQuarterData from '../../hooks/useGetQuarterData'

const SP = [10158, 9891, 9795, 10595]
const retirement = [1500, 3000, 4500, 6000]
const CD = [5000, 3899, 4567, 9874]

const Graph = () => {
  const { investments } = useContext(PlayerContext)

  const plotLines = () => {
    return investments.map((investment, index) => CreateLine(investment, index))
  }

  return (
    <ResponsiveContainer width="100%" height={500}>
      <LineChart
        data={useGetQuarterData(SP, retirement, CD)}
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
        {plotLines()}
      </LineChart>
    </ResponsiveContainer>
  )
}

export default Graph
