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
    'S&P': 4000,
    CD: 2400,
    Bank: 2400,
  },
  {
    name: 'Q2',
    'S&P': 3000,
    CD: 1398,
    Bank: 2210,
  },
  {
    name: 'Q3',
    'S&P': 2000,
    CD: 9800,
    Bank: 2290,
  },
  {
    name: 'Q4',
    'S&P': 2780,
    CD: 3908,
    Bank: 2000,
  },
]

function Graph() {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <LineChart
        data={data}
        margin={{
          top: 20,
          right: 50,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />

        {/* Lines */}
        <Line
          type="monotone"
          dataKey="S&P"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="CD" stroke="#82ca9d" />
        <Line type="monotone" dataKey="Bank" stroke="#f96263" />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default Graph
