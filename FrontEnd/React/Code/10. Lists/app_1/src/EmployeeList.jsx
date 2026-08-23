function EmployeeList() {

  const employees = [
    {
      id: 1,
      name: "Arun",
      role: "React Developer",
      experience: 5
    },
    {
      id: 2,
      name: "Ravi",
      role: "Node Developer",
      experience: 4
    },
    {
      id: 3,
      name: "Kiran",
      role: "UI Developer",
      experience: 3
    }
  ];

  return (
    <div>

      <h1>EmployeeList</h1>

      {employees.map((employee) => (

        <div key={employee.id}>

          <h3>{employee.name}</h3>

          <h6>ID: {employee.id}</h6>

          <p>
            Role: {employee.role}
          </p>

          <p>
            Experience: {employee.experience} years
          </p>

        </div>

      ))}

    </div>
  );
}

export default EmployeeList;
