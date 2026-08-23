// Scenario: Counter

import { useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1> UseState </h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default UseState;
