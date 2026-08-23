import { useReducer } from "react";

function reducers(state, action) {
  if (action.type === "increment") {
    return { count: state.count + 1 };
  }

  if (action.type === "decrement") {
    return { count: state.count - 1 };
  }

  return state;
}

function useReducer2() {
  const [state, sendAction] = useReducer(reducers, {
    count: 0
  });

  return (
    <div>
      <h1> useReducer2 </h1>

      <h2>{state.count}</h2>

      <button onClick={() => sendAction({ type: "increment" })}>
        +
      </button>

      <button onClick={() => sendAction({ type: "decrement" })}>
        -
      </button>
    </div>
  );
}

export default useReducer2;
