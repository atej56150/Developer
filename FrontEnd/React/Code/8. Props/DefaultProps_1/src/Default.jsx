function User({ name, role = "Developer" }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Role: {role}</p>
    </div>
  );
}

export default User;
