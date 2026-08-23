// Updating State

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(10);

  const increase = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1> Updating State - Counter_2 </h1>

      <h2>{count}</h2>

      <button onClick={increase}>
        Increase +
      </button>
    </div>
  );
}

export default Counter;
