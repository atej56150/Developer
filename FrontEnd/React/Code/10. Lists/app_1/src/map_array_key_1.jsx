// Array of Strings

export default function MapArrayKey1() {
    const users = ["Arun", "Ravi", "Kiran"];
    return (
    <div>
      <h1>MapArrayKey1</h1>

      {users.map((user) => (
        <p key={user}>{user}</p>
      ))}
    </div>
  );
}
