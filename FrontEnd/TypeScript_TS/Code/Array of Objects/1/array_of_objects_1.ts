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

// Employee[] means: An array containing Employee objects.

const names = employees.map((employee) => {
  return employee.name;
});

console.log(names);

const details: string[] = employees.map((employee) => {
  return employee.name;
});

console.log(details);
