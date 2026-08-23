// Scenario: Store the Previous Value

import { useState, useRef, useEffect } from "react";

function UseRef2() {
  const [value, setValue] = useState("");

  const previousValue = useRef();

  useEffect(() => {
    previousValue.current = value;
  }, [value]);

  return (
    <div>
      <h1>useRef - Previous Value</h1>

      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter something"
      />

      <h3>Current Value: {value}</h3>

      <h3>Previous Value: {previousValue.current}</h3>
    </div>
  );
}

export default UseRef2;
