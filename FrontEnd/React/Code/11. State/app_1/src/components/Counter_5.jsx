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

initial count = 0 

1st update: setCount(prevCount => prevCount + 1); → prevCount = 0 → 0 + 1 = 1 → count = 1
React now uses the updated value from the 1st update.
2nd update: setCount(prevCount => prevCount + 1); → prevCount = 1 → 1 + 1 = 2 → count = 2
React now uses the updated value from the 2nd update.
3rd update: setCount(prevCount => prevCount + 1); → prevCount = 2 → 2 + 1 = 3 → count = 3

Flow :-
Initial: count = 0
        ↓ Click button
1st: setCount(prevCount => prevCount + 1);
     prevCount = 0
     0 + 1 = 1
        ↓
2nd: setCount(prevCount => prevCount + 1);
     prevCount = 1
     1 + 1 = 2
        ↓
3rd: setCount(prevCount => prevCount + 1);
     prevCount = 2
     2 + 1 = 3
        ↓
Final: count = 3

*/
