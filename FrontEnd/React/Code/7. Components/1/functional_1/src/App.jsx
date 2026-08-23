import UserProfile from "./UserProfile";

function App() {
  return (
    <div>
      <h1>My Application</h1>

      <UserProfile />
    </div>
  );
}

export default App;



/*

Execution Flow :-
App starts
   ↓
App component executes
   ↓
<App> contains <UserProfile />
   ↓
React calls UserProfile()
   ↓
UserProfile returns JSX
   ↓
React displays UI

*/
