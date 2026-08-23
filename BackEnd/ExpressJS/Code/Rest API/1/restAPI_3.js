const express = require('express');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Sample in-memory database
let books = [
    { id: 1, title: "The Node.js Handbook", author: "Flavio Copes" },
    { id: 2, title: "Node.js Design Patterns", author: "Mario Casciaro" },
    { id: 3, title: "You Don't Know JS", author: "Kyle Simpson" }
];

// GET endpoint to retrieve all books
app.get('/api/books', (req, res) => {
    res.json({ books });
});

// GET endpoint to retrieve a specific book by ID
app.get('/api/books/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (book) {
        res.json({ book });
    } else {
        res.status(404).json({ error: "Book not found" });
    }
});

// POST endpoint to add a new book
app.post('/api/books', (req, res) => {
    if (!req.body.title) {
        return res.status(400).json({ error: "Title is required" });
    }
    
    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author || "Unknown"
    };
    books.push(newBook);
    res.status(201).json({ book: newBook });
});

// PUT endpoint to update a book
app.put('/api/books/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) {
        return res.status(404).json({ error: "Book not found" });
    }
    
    book.title = req.body.title || book.title;
    book.author = req.body.author || book.author;
    res.json({ book });
});

// DELETE endpoint to remove a book
app.delete('/api/books/:id', (req, res) => {
    books = books.filter(b => b.id !== parseInt(req.params.id));
    res.json({ result: "Book deleted" });
});

// Error handler for 404
app.use((req, res) => {
    res.status(404).json({ error: "Not found" });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
