import React from 'react'

function CustomizedDot({ cx, cy, color }) {
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

export default CustomizedDot
