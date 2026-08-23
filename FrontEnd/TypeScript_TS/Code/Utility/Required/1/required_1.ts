interface Task  {
    title: string;
    description?: string;
    completed?: boolean;
    startDate: Date;
    endDate: Date;
    assignedTo: string;
}

// all properties of type set to required (non-optional)
type RequiredTask = Required<Task>;           

let List: RequiredTask = {
    title: "SpringBoot",
    description: "Java",
    completed: true,
    assignedTo: "Ravi",
    startDate: new Date(),
    endDate: new Date()
}

console.log(List)
