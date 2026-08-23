interface Action {
    title: string;
    completed: boolean;
    assignedTo: string;
}

let action1: Action = {
    title: "Fix bug in login",
    completed: true,
    assignedTo: "John Doe"
};

action1.completed = false;
action1.assignedTo = "Jane Smith";


type ReadonlyAction = Readonly<Action>;

let action2: ReadonlyAction = {
    title: "Fix bug in login",
    completed: true,
    assignedTo: "John Doe"
};

action2.title = "Fixed bug in login"
action2.completed = false;
