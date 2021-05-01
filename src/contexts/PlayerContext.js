import { createContext, useReducer } from 'react'

// Set initial state of expenses with mock data
const initialState = {
  bank: 65000,
  salary: 65000,
  goals: [],
  choices: [],
  investmentes: [],
}

// create the context
export const PlayerContext = createContext()

// create the provider
export const PlayerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PlayerReducer, initialState)

  return (
    <PlayerContext.Provider
      value={{ budget: state.budget, expenses: state.expenses, dispatch }}
    >
      {children}
    </PlayerContext.Provider>
  )
}

const PlayerReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      }
    case 'DELETE_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      }
    default:
      return state
  }
}
