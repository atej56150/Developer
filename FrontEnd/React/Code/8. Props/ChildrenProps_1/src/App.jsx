import Card from "./Card";
import Phone from "./PhoneNo"

function Button({ children }) {
  return (
    <button>
      {children}
    </button>
  );
}

function App() {
  return (
    <div>
      <Card>
        <h2>Welcome Arun</h2>
        <p>Welcome to React</p>
      </Card>

      <div>
        <Button>Login</Button>
        <Button>Register</Button>
        <Button>Logout</Button>
      </div>

      <Phone>
        <p>India +91</p>
      </Phone>
      <Phone>Phone:- 9391777401</Phone>

      <h7>copyrights @2026</h7>
    </div>
  );
}

export default App;
