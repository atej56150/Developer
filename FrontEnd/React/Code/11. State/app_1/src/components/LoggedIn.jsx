// Local State

import { useState } from "react";

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h1> Local State - LoggedIn </h1>

      <h2>
        {isLoggedIn ? "Welcome Arun" : "Please Login"}
      </h2>

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default Login;



/*

isLoggedIn      → current value = false (isLoggedIn = false)
setIsLoggedIn   → function to update/change the value

const [isLoggedIn, setIsLoggedIn] = useState(false);
      ↓
isLoggedIn = false
      ↓
{isLoggedIn ? "Welcome Arun" : "Please Login"} → Please Login → button: {isLoggedIn ? "Logout" : "Login"} → Login

Output :-
Please Login
[ Login ]



! means NOT operator.
!true  → false
!false → true

User clicks Login :-
<button onClick={() => setIsLoggedIn(!isLoggedIn)}> →  →  →  →
      ↓
setIsLoggedIn(!isLoggedIn)
      ↓
isLoggedIn = false
      ↓
!isLoggedIn = !false → true
      ↓
setIsLoggedIn(true);
      ↓
isLoggedIn = true
      ↓
{isLoggedIn ? "Welcome Arun" : "Please Login"} → true ? "Welcome Arun" : "Please Login" → Welcome Arun
      ↓
button :- {isLoggedIn ? "Logout" : "Login"} → Logout

Output :-
Welcome Arun
[ Logout ]



User clicks Logout :-
isLoggedIn = true
      ↓
setIsLoggedIn(!isLoggedIn)
      ↓
setIsLoggedIn(!true)
      ↓
setIsLoggedIn(false)
      ↓
isLoggedIn = false

Output :-
Please Login
[ Login ]


*/
