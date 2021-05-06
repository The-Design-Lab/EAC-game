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

import useGetQuarterData from '../../hooks/useGetQuarterData'

const Graph = ({ data }) => {
  const { investments } = useContext(PlayerContext)

  const plotLines = () => {
    return investments.map((investment, index) => CreateLine(investment, index))
  }

  return (
    <ResponsiveContainer width="100%" height={500}>
      <LineChart
        data={useGetQuarterData(...data)}
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
