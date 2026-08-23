// Local State + Updating State + Batching

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increaseOne = () => {
    setCount(prevCount => prevCount + 1);
  };

  const increaseThree = () => {
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={increaseOne}>
        Increase 1
      </button>

      <button onClick={increaseThree}>
        Increase 3
      </button>
    </div>
  );
}

export default Counter;
