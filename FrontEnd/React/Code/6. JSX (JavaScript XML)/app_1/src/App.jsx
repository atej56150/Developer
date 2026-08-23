function App() {

  const name = "Arun";
  const age = 25;
  const isLoggedIn = true;

  function getMessage() {
    return "Welcome to React";
  }

  return (
    <div>
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
    </div>
  );
}

export default App;
