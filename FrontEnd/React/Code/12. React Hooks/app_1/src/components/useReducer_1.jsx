import { useReducer } from "react";

// 1. Initial State
const initialState = 0;

// 2. Reducer Function
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;

    case "reset":
      return 0;

    default:
      return state;                     // if the action is not available in the reducer, keep the existing state value unchanged.
  }
}

function useReducer1() {
  // 3. useReducer Hook
  const [count, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div>
      <h1> useReducer1 </h1>

      <h2>Count: {count}</h2>

      <button
        onClick={() => dispatch({ type: "increment" })}
      >
        Increment
      </button>

      <button
        onClick={() => dispatch({ type: "decrement" })}
      >
        Decrement
      </button>

      <button
        onClick={() => dispatch({ type: "reset" })}
      >
        Reset
      </button>
    </div>
  );
}

export default useReducer1;



/*

reducer: Calculates and returns the new state value
state: Current state value, Initially state = 0 based on the action (Increment/Decrement) state will get store the current value
action:	What operation should happen (Increment/Decrement) 
action.type:	Identifies the operation
return:	Returns the new state value 

count: state variable, it stores the current state value, Similar to state in useState.
dispatch: its a function, sends an action to the reducer function, Similar in purpose to setState in useState.

*/
