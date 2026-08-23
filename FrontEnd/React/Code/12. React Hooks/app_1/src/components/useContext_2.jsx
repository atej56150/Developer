// With useContext

import { createContext, useContext } from "react";

// Step 1: Create Context
const UserContext = createContext();

function useContext2() {
  const userName = "Arun";

  return (
    // Step 2: Share the value with child components
    <UserContext.Provider value={userName}>
      <div>
        <h1>With useContext</h1>
        <Dashboard />
      </div>
    </UserContext.Provider>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <Profile />
    </div>
  );
}

function Profile() {
  return (
    <div>
      <h3>Profile</h3>
      <User />
    </div>
  );
}

function User() {
  // Step 3: Read the shared value
  const userName = useContext(UserContext);

  return <h4>User ➔ Hello {userName}</h4>;
}

export default useContext2;
