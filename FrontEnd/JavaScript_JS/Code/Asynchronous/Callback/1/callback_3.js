function getUser(callback) {
    setTimeout(() => {
        const user = {
            name: "Arun",
            age: 25
        };

        callback(user);
    }, 2000);
}

getUser((user) => {
    console.log(user.name);
    console.log(user.age);
});



/*

Output after 2 seconds:
Arun
25

*/
