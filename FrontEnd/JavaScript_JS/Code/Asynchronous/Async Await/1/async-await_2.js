// API

async function getUsers() {
    try {
        // 1. Call the API
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        // 2. Convert response to JSON
        const data = await response.json();

        // 3. Print the data
        console.log("Users:");

        data.forEach((user) => {
            console.log("ID:", user.id);
            console.log("Name:", user.name);
            console.log("Email:", user.email);
            console.log("-------------------");
        });
    } catch (error) {
        // 4. Handle error
        console.log("Error:", error);
    }
}

// 5. Call the function
getUsers();
