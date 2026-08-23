const express = require("express");

const app = express();

app.get("/", (req, res) => {
res.send("Home Page");
});

app.get("/about", (req, res) => {
res.send("About Page");
});

app.use((req, res) => {
res.status(404).send("Page Not Found");
});

app.listen(3000, () => {
console.log("Server running on port 3000");
});


/*

Then open your browser and visit:
http://localhost:3000/          → Home Page
http://localhost:3000/about     → About Page
http://localhost:3000/contact   → Page Not Found

*/