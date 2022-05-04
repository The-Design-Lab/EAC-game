import { createContext, useReducer } from "react";
import { investmentTotals } from "../data/data";

// Set initial state of expenses with mock data
const initialState = {
  bank: 0,
  salary: 60000,
  goals: [],
  choices: [],
  investments: [],
  investmentAccount: 0,
  graph: [{ year: 2004, amount: 0 }],
  totals: [],
};

// create the context
export const PlayerContext = createContext(null);

// create the provider
export const PlayerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PlayerReducer, initialState);

  return (
    <PlayerContext.Provider
      value={{
        bank: state.bank,
        salary: state.salary,
        goals: state.goals,
        choices: state.choices,
        investments: state.investments,
        investmentAccount: state.investmentAccount,
        graph: state.graph,
        totals: state.totals,
        dispatch,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

const PlayerReducer = (state, action) => {
  switch (action.type) {
    case "ADD_GOAL":
      return {
        ...state,
        goals: [...state.goals, action.payload],
      };
    case "REMOVE_GOAL":
      return {
        ...state,
        goals: [...state.goals].filter(
          (goal) => goal.name !== action.payload.name
        ),
      };
    case "ADD_INVESTMENT":
      return {
        ...state,
        investments: [...state.investments, action.payload],
      };
    case "SELECT_CHOICE":
      return {
        ...state,
        totals: [...state.totals, action.payload.index],
        choices: [...state.choices, action.payload.choice],
        investments: [...state.investments, action.payload.investment],
      };
    case "REMOVE_INVESTMENT":
      return {
        ...state,
        choices: [...state.choices, action.payload.choice],
        totals: [...state.totals, action.payload.index],
        investments: [...state.investments, action.payload.investment].filter(
          (investment) => investment !== "S&P"
        ),
      };
    case "ADD_EVENT":
      return {
        ...state,

        bank: state.bank + action.payload,
      };
    case "GENERATE_GRAPH": {
      return {
        ...state,
        graph: [...state.graph, action.payload],
      };
    }
    case "ADD_RETURNS": {
      return {
        ...state,
        bank: investmentTotals[state.totals.map((c) => c).join(",")],
      };
    }
    case "RESET_RETURNS": {
      return {
        ...state,
        investmentAccount: 0,
      };
    }
    case "RESET":
      return initialState;
    default:
      return state;
  }
};
