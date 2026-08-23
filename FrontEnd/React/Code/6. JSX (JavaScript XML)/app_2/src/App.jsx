import { Fragment } from "react";

function App() {

  const name = "Arun";
  const age = 25;
  const isLoggedIn = true;

  function getMessage() {
    return "Welcome to React";
  }

  return (
    <Fragment>
      <h1>Hello {name}</h1>

      <p>Age: {age}</p>

      <p>{getMessage()}</p>

      {age >= 18 ? (
        <p>You are an adult</p>
      ) : (
        <p>You are a minor</p>
      )}

      {isLoggedIn && (
        <p>You are logged in</p>
      )}
    </Fragment>
  );
}

export default App;
