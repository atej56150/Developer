function IfFalse() {
  const isLoggedIn = false;

  if (isLoggedIn) {
    return <h2>Welcome Arun</h2>;
  }

  return <h2>Please Login ... If(false)</h2>;
}

export default IfFalse;



/*

isLoggedIn = false
       ↓
    if(false)
       ↓
Please Login

*/
