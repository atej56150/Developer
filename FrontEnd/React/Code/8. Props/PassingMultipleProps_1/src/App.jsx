import User0 from "./Props";
import User1 from "./DestructuringProps";

function App() {
  return (
    <>
      <User0
        name="Arun"
        age={25}
        role="React Developer"
        city="USA"
      />

      <User1
        name="Theja"
        age={30}
        role="Node Developer"
        city="UK"
      />
    </>
  );
}

export default App;



/*

You had:

return (
  <User0 />
  <User1 />
);

React expects one parent element from return.
The issue is that in JSX, cannot place two components directly inside return without a parent wrapper.
In that case use a <div>...</div> or <>...</> Fragment.

<div>
  <User0 />
  <User1 />
</div>

<>
  <User0 />
  <User1 />
</>


*/
