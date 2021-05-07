import { createContext, useReducer } from 'react'

// Set initial state of expenses with mock data
const initialState = {
  bank: 0,
  salary: 65000,
  goals: [],
  choices: [],
  investments: [],
}

// create the context
export const PlayerContext = createContext(null)

// create the provider
export const PlayerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PlayerReducer, initialState)

  return (
    <PlayerContext.Provider
      value={{
        bank: state.bank,
        salary: state.salary,
        goals: state.goals,
        choices: state.choices,
        investments: state.investments,
        dispatch,
      }}
    >
      {children}
    </PlayerContext.Provider>
  )
}

const PlayerReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_GOAL':
      return {
        ...state,
        goals: [...state.goals, action.payload],
      }
    case 'ADD_INVESTMENT':
      return {
        ...state,
        investments: [...state.investments, action.payload],
      }
    case 'SELECT_CHOICE':
      return {
        ...state,
        choices: [...state.choices, action.payload.choice],
        investments: [...state.investments, action.payload.investment],
        bank: state.bank + state.salary + action.payload.expenditures,
      }
    default:
      return state
  }
}
