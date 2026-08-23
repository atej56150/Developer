function IfTrue() {
  const isLoggedIn = true;

  if (isLoggedIn) {
    return <h2>Welcome Arun ... If(true)</h2>;
  }

  return <h2>Please Login</h2>;
}

export default IfTrue;


/*

isLoggedIn = true
       ↓
    if(true)
       ↓
Welcome Arun

*/
