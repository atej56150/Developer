import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />

      <UserProfile />

      <Footer />
    </div>
  );
}

export default App;



/*

Execution Flow :-
                App
                 |
       ┌─────────┼─────────┐
       ↓         ↓         ↓
     Header   UserProfile Footer
                  |
             ┌────┴────┐
             ↓         ↓
       ProfileImage ProfileDetails

UserProfile is combining two smaller components.

App
 ↓
Header
 ↓
UserProfile
 ↓
ProfileImage
 ↓
ProfileDetails
 ↓
Footer

This makes the application easier to maintain.

*/
