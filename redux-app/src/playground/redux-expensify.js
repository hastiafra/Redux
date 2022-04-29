import { renderIntoDocument } from "react-dom/test-utils";
import { createStore, combineReducers } from "redux";
const { v4: uuidv4 } = require("uuid");

//default values
const expensesReducerDefaultState = [];

const filteresReducerDefaultState = {
  endDate: undefined,
  sortBy: "",
  startDate: undefined,
  text: "",
};

//actionGenerators

const addExpenses = ({
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

const removeExpense = ({ id } = {}) => {
  return {
    type: "REMOVE_EXPENSE",
    id,
  };
};

const editExpense = (id, updates) => {
  return {
    type: "EDIT_EXPENSE",
    id,
    updates,
  };
};

const setTextFilter = (text = "") => {
  return {
    type: "TEXT_FILTER",
    text,
  };
};

const sortByAmount = () => {
  return {
    type: "SORT_BY_AMOUNT",
  };
};

const sortByDate = () => {
  return {
    type: "SORT_BY_DATE",
  };
};

const setStartDate = (newDate) => {
  return {
    type: "SET_START_DATE",
    newDate,
  };
};

const setEndDate = (newDate) => {
  return {
    type: "SET_END_DATE",
    newDate,
  };
};

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

const filtersReducer = (state = filteresReducerDefaultState, action) => {
  switch (action.type) {
    case "TEXT_FILTER":
      return {
        ...state,
        text: action.text,
      };

    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount",
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date",
      };

    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.newDate,
      };

    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.newDate,
      };
    default:
      return state;
  }
};

//get visible expenses
const getVisibleExpenses = (expenses, filters) => {

  const { sortBy, text, startDate, endDate } = filters;

  let filteredExpenses = expenses.filter((expense) => {
    const startDateMatch =
      typeof startDate !== "number" || expense.createdAt >= startDate;
    const endDateMatch =
      typeof endDate !== "number" || expense.createdAt <= endDate;
    let searchText = text.toLowerCase();
    const textMatch = expense.description.toLowerCase().includes(searchText);

    return startDateMatch && endDateMatch && textMatch;
  });

  return filteredExpenses.sort((a, b) => {
      
    if (sortBy === "date") {
      return a.createdAt - b.createdAt;
    } else if(sortBy ==="amount"){
        return a.amount - b.amount;
    }
  });




};

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
  })
);

store.subscribe(() => {
  const state = store.getState();

  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

  return console.log(visibleExpenses);
});

const expenseOne = store.dispatch(
  addExpenses({ description: "rent", amount: 500, createdAt: 1500 })
);

const expenseTwo = store.dispatch(
  addExpenses({ description: "coffee", amount: 100, createdAt: 1000 })
);

// store.dispatch(removeExpense({ id: expenseOne.expenses.id }));
// store.dispatch(
//   editExpense(expenseTwo.expenses.id, { amount: 300, note: "new coffee price" })
// );

// store.dispatch(setTextFilter("COFFEE"));
// store.dispatch(setTextFilter(""));

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));

const demoState = {
  expenses: [
    {
      id: "hfgeyeie",
      description: "January rent",
      note: "this is the final payment for this address",
      amount: 89000,
      createdAt: 0,
    },
  ],
  filters: {
    text: "rent",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined,
  },
};
