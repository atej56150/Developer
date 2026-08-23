import UserCard from "./UserCard";

function App() {
  return (
    <div>
      <h1>Users</h1>

      <UserCard
        name="Arun"
        role="React Developer"
        location="Sydney"
      />

      <UserCard
        name="John"
        role="Node Developer"
        location="Melbourne"
      />

      <UserCard
        name="David"
        role="Full Stack Developer"
        location="Brisbane"
      />
    </div>
  );
}

export default App;
