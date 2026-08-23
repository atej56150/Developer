function TernaryTrue1() {
  const isLoggedIn = true;

  return (
    <div>
      <h1>Ternary(true)_1</h1>

      {isLoggedIn ? (
        <h2>Welcome Arun</h2>
      ) : (
        <h2>Please Login</h2>
      )}
    </div>
  );
}

export default TernaryTrue1;



/*

isLoggedIn = true
       ↓
 condition ?
       ↓
   TRUE
       ↓
Welcome Arun

*/
