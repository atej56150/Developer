// State Batching - its not updating new state depends on old state

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  return (
    <div>
      <h1> State Batching - Counter_4 </h1>

      <h2>{count}</h2>

      <button onClick={handleClick}>
        Increase
      </button>
    </div>
  );
}

export default Counter;



/*

you might expect: 0 → 1 → 2 → 3
but the result will be: 0 → 1

count = 0, all three statements use the same count value from that current render.
suppose: count = 0 → then: setCount(count + 1); → means: setCount(1) --|
again count = 0 → then: setCount(count + 1); → means: setCount(1)    --| ➔ count = 1
again count = 0 → then: setCount(count + 1); → means: setCount(1)    --|

So Effectively :-
setCount(1)
setCount(1)
setCount(1)
        ↓
Final state = 1

Flow :-
Initial: count = 0        ➤        All 3 calls read that same count is 0, all three calls use the count value from the current render, which is 0
        ↓
UI displays Count: 0
        ↓
Click button Increase
        ↓
1st: setCount(count + 1)
     setCount(0 + 1)
     setCount(1)
        ↓
2nd: setCount(count + 1)
     setCount(0 + 1)
     setCount(1)
        ↓
3rd: setCount(count + 1)
     setCount(0 + 1)
     setCount(1)
        ↓
React batches the state updates
        ↓
Final: count = 1          
        ↓
React re-renders the component
        ↓
UI displays Count: 1     

*/
