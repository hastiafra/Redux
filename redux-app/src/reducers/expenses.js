const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    // console.log(action)
    switch (action.type) {
      case "ADD_EXPENSE":
        //  return state.concat(action.expenses) <both ways possible>
        return [...state, action.expenses];
  
      case "REMOVE_EXPENSE":
        return state.filter((item) => {
          return item.id !== action.id;
        });
  
      case "EDIT_EXPENSE":
        return state.map((expense) => {
          if (expense.id === action.id) {
            return {
              ...expense,
              ...action.updates,
            };
          } else {
            return expense;
          }
        });
  
      default:
        return state;
    }
  };

  export default expensesReducer;