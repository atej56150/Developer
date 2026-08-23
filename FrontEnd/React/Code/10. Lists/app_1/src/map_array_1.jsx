// Array of Strings

const users = ["Arun", "Ravi", "Kiran"];

export default function MapArray1() {
  return (
    <div>
      <h1>MapArray1</h1>
      {users.map((user) => (
        <p>{user}</p>
      ))}
    </div>
  );
}
