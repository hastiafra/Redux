import { renderIntoDocument } from "react-dom/test-utils";
import { createStore, combineReducers } from "redux";

const expencesReducerDefaultState = [];
const filteresReducerDefaultState = {}; 

const expensesReducer = (state = expencesReducerDefaultState, action) => {
  switch (action.type) {
    default: return state;
  }
};

const filtersReducer = (state = filteresReducerDefaultState, action) =>{

    switch(action.type){
        default : return state; 
    }
}

const store = createStore(
    combineReducers({
        expenses:expensesReducer,
        filters: filtersReducer,

    })
    );



console.log(store.getState())

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
