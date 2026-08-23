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

        console.log("JSON Output :-", data)
        
    } catch (error) {
        // 4. Handle error
        console.log("Error:", error);
    }
}

// 5. Call the function
getUsers();



/*

Where is the Promise ?
This: fetch("https://jsonplaceholder.typicode.com/users")

*/
