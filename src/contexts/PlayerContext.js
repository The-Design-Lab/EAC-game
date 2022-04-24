import { createContext, useReducer } from "react";

// Set initial state of expenses with mock data
const initialState = {
  bank: 0,
  salary: 60000,
  goals: [],
  choices: [],
  investments: [],
  investmentAccount: 0,
  graph: [{ year: "", amount: 0 }],
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
      console.log(action.payload.name);
      console.log(state.goals);
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
        choices: [...state.choices, action.payload.choice],
        investments: [...state.investments, action.payload.investment],
        bank: state.bank + state.salary + action.payload.expenditures,
      };
    case "REMOVE_INVESTMENT":
      return {
        ...state,
        choices: [...state.choices, action.payload.choice],
        investments: [...state.investments, action.payload.investment].filter(
          (investment) => investment !== "S&P"
        ),
        bank: state.bank + state.salary + action.payload.expenditures,
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
        investmentAccount: state.investmentAccount + action.payload,
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
