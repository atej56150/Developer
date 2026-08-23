// Local State + Updating State + Batching

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increaseOne = () => {
    setCount(count + 1);
  };

  const increaseThree = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  return (
    <div>
      <h1> example_1 with state & setState </h1>  

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
