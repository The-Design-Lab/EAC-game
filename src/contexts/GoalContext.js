import React, { useEffect, createContext, useReducer } from 'react'
import { goalReducer } from '../reducers/goalReducer'

export const GoalContext = createContext()

const GoalContextProvider = ({ children }) => {
  const [goals, dispatch] = useReducer(goalReducer, [], () => {
    const localData = localStorage.getItem('goals')
    let rawData = localData ? JSON.parse(localData) : []
    console.log(rawData[rawData.length - 1].checkedItems)
    return rawData
  })

  useEffect(() => {
    localStorage.setItem('goals', JSON.stringify(goals))
  }, [goals])

  return (
    <GoalContext.Provider value={{ goals, dispatch }}>
      {children}
    </GoalContext.Provider>
  )
}

export default GoalContextProvider
