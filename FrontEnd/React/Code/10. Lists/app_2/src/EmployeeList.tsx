interface Employee {
  id: number;
  name: string;
  role: string;
}

const employees: Employee[] = [
  {
    id: 1,
    name: "Arun",
    role: "Developer"
  },
  {
    id: 2,
    name: "Rahul",
    role: "Tester"
  },
  {
    id: 3,
    name: "John",
    role: "Manager"
  }
];

function EmployeeList() {
  return (
    <div>
      {employees.map((employee) => (
        <div key={employee.id}>
          <h3>{employee.name}</h3>
          <p>{employee.role}</p>
        </div>
      ))}
    </div>
  );
}

export default EmployeeList;
