import { createStore } from "redux";

//action generator

const incrementCount = ({ incrementBy = 1 } = {}) => {
  return {
    type: "INCREMENT",
    incrementBy,
  };
};

const decrementCount = ({ decrementBy = 1 } = {}) => {
  return {
    type: "DECREMENT",
    decrementBy,
  };
};

const setCount = ({ count }) => {
  return {
    type: "SET",
    count,
  };
};


const reducerCount =  (state = { count: 0 }, action) => {
    switch (action.type) {
      case "INCREMENT":
        //   const incrementBy =
        //     typeof action.incrementBy === "number" ? action.incrementBy : 1;
  
        return { count: state.count + action.incrementBy };
  
      case "DECREMENT":
        //   const decrementBy =
        //     typeof action.decrementBy === "number" ? action.decrementBy : 1;
  
        return { count: state.count - action.decrementBy };
  
      case "SET":
        return {
          count: action.count,
        };
  
      case "RESET":
        return { count: 0 };
  
      default:
        return state;
    }
  }

const store = createStore(reducerCount);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch({
//   type: "INCREMENT",
//   incrementBy: 5,
// });
store.dispatch(incrementCount());

store.dispatch(incrementCount({ incrementBy: 5 }));

// store.dispatch({
//   type: "INCREMENT",
// });

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 4 }));

store.dispatch(
  setCount({
    count: 110,
  })
);

unsubscribe();

store.dispatch({
  type: "RESET",
});
