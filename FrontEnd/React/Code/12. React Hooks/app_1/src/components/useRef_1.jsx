// Scenario: Focus an Input

import { useRef } from "react";

function UseRef1() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h1> UseRef - Focus Input </h1>

      <input ref={inputRef} />

      <button onClick={handleFocus}>
        Focus Input
      </button>
    </div>
  );
}

export default UseRef1;
