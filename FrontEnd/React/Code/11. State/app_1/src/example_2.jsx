// Local State + Updating State + Batching

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const prevThree = () => {
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <h1> example_2 with state & setState & prevState </h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Increase 1
      </button>

      <button onClick={prevThree}>
        Increase 3
      </button>
    </div>
  );
}

export default Counter;
