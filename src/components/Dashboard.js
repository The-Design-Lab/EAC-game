import React from 'react'
import styled from 'styled-components'

const Dash = styled.div`
  /* box-shadow: var(--bevel-default); */
  background: #1e2125;
  color: white;
  padding: 15px;
  width: max-content;
  margin: 0 auto;

  span {
    font-family: var(--display);
    font-weight: 700;
    font-size: 14px;
    margin-right: 10px;
  }
`

function Dashboard() {
  return (
    <Dash>
      <span>Year: 2004</span>
      <span>Decision: 1</span>
    </Dash>
  )
}

export default Dashboard
