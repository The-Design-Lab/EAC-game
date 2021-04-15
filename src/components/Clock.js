import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Clock = styled.div`
  display: flex;
  align-items: center;
  align-items: center;
  height: 80%;
  padding: 24px 16px;
  background-color: var(--color-primary-light);
  box-shadow: var(--bevel-active);
`

export const DateTime = () => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    let timer = setInterval(() => setDate(new Date()), 1000)
    return function cleanup() {
      clearInterval(timer)
    }
  })

  return (
    <Clock>
      <span>{date.toLocaleTimeString()}</span>
      {/* <span>{date.toLocaleDateString()}</span> */}
    </Clock>
  )
}

export default DateTime
