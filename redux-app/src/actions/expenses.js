const { v4: uuidv4 } = require("uuid");

export const addExpenses = ({
    amount = 0,
    createdAt = 0,
    description = "",
    note = "",
  } = {}) => {
    return {
      type: "ADD_EXPENSE",
      expenses: {
        id: uuidv4(),
        amount,
        createdAt,
        description,
        note,
      },
    };
  };
  
  export const removeExpense = ({ id } = {}) => {
    return {
      type: "REMOVE_EXPENSE",
      id,
    };
  };
  
  export const editExpense = (id, updates) => {
    return {
      type: "EDIT_EXPENSE",
      id,
      updates,
    };
  };