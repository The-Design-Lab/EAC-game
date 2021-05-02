import React, { useContext } from 'react'
import { PlayerContext } from '../contexts/PlayerContext'

function Bank() {
  const { bank } = useContext(PlayerContext)

  return (
    <div>
      <h5>Accounts:</h5>
      <p>Total Balance: ${bank}</p>
    </div>
  )
}

export default Bank
