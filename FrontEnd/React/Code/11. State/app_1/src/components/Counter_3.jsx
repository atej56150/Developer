// Updating State Based on single Previous State

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <h1> Updating State Based on single Previous State - Counter_3 </h1>

      <h2>Count: {count}</h2>

      <button onClick={increase}>
        Increase
      </button>
    </div>
  );
}

export default Counter;



/*

count → current state value = 0 (count = 0) initially
setCount → function used to update count

React gives the current/previous state value to prevCount.
Take the current state count and give it to prevCount.
      
initially: count = 0 then click Increase → setCount(prevCount => prevCount + 1) → prevCount = 0 → prevCount + 1 → 0 + 1 = 1 → setCount(1) → count = 1 → UI Count: 1
again click Increase → count = 1 → setCount(prevCount => prevCount + 1) → prevCount = 1 → prevCount + 1 → 1 + 1 = 2 → setCount(2) → count = 2 → UI Count: 2

Flow :-
Initially: count = 0
      ↓
Click Increase
      ↓
setCount(prevCount => prevCount + 1)
      ↓
React gives previous state value to prevCount → count = 0
      ↓
prevCount = 0
      ↓
prevCount + 1
      ↓
0 + 1 = 1
      ↓
setCount(1)
      ↓
count = 1
      ↓
React re-renders
      ↓
UI displays Count: 1
      ↓
Click Increase
      ↓
setCount(prevCount => prevCount + 1)
      ↓
React gives previous state value to prevCount → count = 1
      ↓
prevCount = 1
      ↓
prevCount + 1
      ↓
1 + 1 = 2
      ↓
setCount(2)
      ↓
count = 2
      ↓
React re-renders
      ↓
UI displays Count: 2

*/
