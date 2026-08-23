// Local State

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1> Local State - Counter_1 </h1>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default Counter;



/*

count     → stores the current state value = 0 (count = 0) initially
setCount  → changes/updates the value = function used to update the state value

count = 0 then click Increase → setCount(count + 1); become setCount(0 + 1); → count + 1 → 0 + 1 = 1 → setCount(1); → count = 1
count = 1 then click Increase → setCount(count + 1); become setCount(1 + 1); → count + 1 → 1 + 1 = 2 → setCount(2); → count = 2

Flow :-
Component starts
      ↓
useState(0)
      ↓
count = 0
      ↓
UI displays Count: 0
      ↓
User clicks Increase
      ↓
setCount(count + 1)
      ↓
setCount(0 + 1)
      ↓
setCount(1)
      ↓
React updates state
      ↓
count = 1
      ↓
React re-renders
      ↓
UI displays Count: 1
      ↓
User clicks Increase
      ↓
setCount(1 + 1)
      ↓
setCount(2)
      ↓
React updates state
      ↓
count = 2
      ↓
React re-renders
      ↓
UI displays Count: 2

*/
