// Child Component

function User(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
      <p>{props.location}</p>
    </div>
  );
}

export default User;
