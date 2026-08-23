// Child Component

function User({ name, age, location }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{age}</p>
      <p>Location: {location}</p>
    </div>
  );
}

export default User;
