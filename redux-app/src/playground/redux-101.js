import { createStore } from "redux";

const store = createStore((state = { count: 0 }, action) => {
  const incrementBy =
    typeof action.incrementBy === "number" ? action.incrementBy : 1;

  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + incrementBy };

    case "DECREMENT":
      return { count: state.count - 1 };

    case "RESET":
      return { count: 0 };

    default:
      return state;
  }
});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({
  type: "INCREMENT",
  incrementBy: 5,
});

store.dispatch({
  type: "INCREMENT",
});

unsubscribe();

store.dispatch({
  type: "RESET",
});

store.dispatch({
  type: "DECREMENT",
});
