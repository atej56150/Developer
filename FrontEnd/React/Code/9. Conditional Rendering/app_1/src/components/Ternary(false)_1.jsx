function TernaryFalse1() {
  const isLoggedIn = false;

  return (
    <div>
      <h1>Ternary(false)_1</h1>

      {isLoggedIn ? (
        <h2>Welcome Arun</h2>
      ) : (
        <h2>Please Login</h2>
      )}
    </div>
  );
}

export default TernaryFalse1;



/*

isLoggedIn = false
       ↓
 condition ?
       ↓
   FALSE
       ↓
Please Login

*/
