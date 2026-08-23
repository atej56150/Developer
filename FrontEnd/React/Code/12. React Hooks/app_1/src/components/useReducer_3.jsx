import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;

    default:
      return state;
  }
}

function useReducer3() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1> useReducer3 </h1>

      <h2>Count: {count}</h2>

      <button onClick={() =>
        dispatch({ type: "increment" })
      }>
        Increment
      </button>

      <button onClick={() =>
        dispatch({ type: "decrement" })
      }>
        Decrement
      </button>
    </div>
  );
}

export default useReducer3;
