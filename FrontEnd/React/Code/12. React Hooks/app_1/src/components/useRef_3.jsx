import { useState, useRef, useEffect } from "react";

function UseRef3() {
  const [value, setValue] = useState("");
  const previousValue = useRef("");

  const oldValue = previousValue.current;

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
      <h3>Previous Value: {oldValue}</h3>
    </div>
  );
}

export default UseRef3;
