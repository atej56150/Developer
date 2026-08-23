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
      <h1> State Batching </h1>

      <h2>{count}</h2>

      <button onClick={handleClick}>
        Increase
      </button>
    </div>
  );
}

export default Counter;



/*

might expect: 0 → 1 → 2 → 3
but the result will be: 0 → 1

count = 0, all three statements use the same count value from that current render.
suppose: count = 0 → then: setCount(count + 1); → means: setCount(1)
again count = 0 → then: setCount(count + 1); → means: setCount(1)
again count = 0 → then: setCount(count + 1); → means: setCount(1)

So Effectively :-
setCount(1)
setCount(1)
setCount(1)
        ↓
Final state = 1

Flow :-
Initial: count = 0
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
Final: count = 1

*/
