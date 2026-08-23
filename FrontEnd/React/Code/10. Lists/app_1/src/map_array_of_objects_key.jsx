// mapping over an array of objects

function MapArrayObjects() {
  const employees = [
    {
      id: 1,
      name: "Arun",
      role: "React Developer"
    },
    {
      id: 2,
      name: "Ravi",
      role: "Node Developer"
    },
    {
      id: 3,
      name: "Kiran",
      role: "UI Developer"
    }
  ];

  return (
    <div>
      <h1>MapArrayObjects</h1>

      {employees.map((employee) => (
        <div key={employee.id}>
          <h3>{employee.name}</h3>
          <p>{employee.role}</p>
        </div>
      ))}
    </div>
  );
}

export default MapArrayObjects;
