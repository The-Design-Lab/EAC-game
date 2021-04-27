export const goalReducer = (state, action) => {
  switch (action.type) {
    case 'CHECK_GOAL':
      return [
        ...state,
        {
          checkedItems: action.goal.checkedItems,
        },
      ]
    default:
      return state
  }
}
