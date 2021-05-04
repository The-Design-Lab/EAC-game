import { useState } from 'react'
import { PlayerContext } from '../contexts/PlayerContext'

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false)
  const toggle = () => setIsShowing(!isShowing)

  return {
    isShowing,
    toggle,
  }
}

export default useModal
