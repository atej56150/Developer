// State Batching - its updating new state depends on old state

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={handleClick}>
        Increase 3 Times
      </button>
    </div>
  );
}

export default Counter;



/*

Initial: count = 0
        ↓
1st update: setCount(prevCount => prevCount + 1); → prevCount = 0 → 0 + 1 = 1
React now uses the updated value from the 1st update to the 2nd update.
2nd update: setCount(prevCount => prevCount + 1); → prevCount = 1 → 1 + 1 = 2
React now uses the updated value from the 2nd update to the 3rd update.
3rd update: setCount(prevCount => prevCount + 1); → prevCount = 2 → 2 + 1 = 3
        ↓
Final: count = 3

Flow :-
Initial: count = 0
        ↓
UI displays Count: 0
        ↓
Click button
        ↓
1st: setCount(prevCount => prevCount + 1)
     prevCount = 0
     0 + 1 = 1
        ↓
2nd: setCount(prevCount => prevCount + 1)
     prevCount = 1
     1 + 1 = 2
        ↓
3rd: setCount(prevCount => prevCount + 1)
     prevCount = 2
     2 + 1 = 3
        ↓
React batches the state updates
        ↓
Final: count = 3
        ↓
React re-renders the component
        ↓
UI displays Count: 3 

*/
