import { createContext, useReducer } from 'react'

// Set initial state of expenses with mock data
const initialState = {
  bank: 65000,
  salary: 65000,
  goals: [{ name: 'Save for Retirement', price: 270000, checked: true }],
  choices: [],
  investments: [],
}

// create the context
export const PlayerContext = createContext()

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
        // goals: [...state.goals, action.payload].filter(
        //   (goal) => goal.name !== action.payload.name
        // ),
      }
    case 'SELECT_CHOICE-1':
      return {
        ...state,
        choices: [...state.choices, action.payload],
      }
    default:
      return state
  }
}
