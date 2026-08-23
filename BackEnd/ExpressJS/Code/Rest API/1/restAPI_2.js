const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.json());

// File to store users
const USERS_FILE = 'restAPI_2.json';

// Load users from file (or create if it doesn't exist)
let users = [];
if (fs.existsSync(USERS_FILE)) {
  users = JSON.parse(fs.readFileSync(USERS_FILE, 'utf-8'));
} else {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

// Save users to file
const saveUsers = () => {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
};

// GET all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// GET a single user by ID
app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
});

// POST a new user
app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }
  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);
  saveUsers(); // Save to file
  res.status(201).json(newUser);
});

// PUT
app.put('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'User not found' });

  const { name, email } = req.body;
  if (name) user.name = name;
  if (email) user.email = email;
  saveUsers(); // Save to file
  res.json(user);
});

// DELETE
app.delete('/api/users/:id', (req, res) => {
  const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
  if (userIndex === -1) return res.status(404).json({ error: 'User not found' });

  users.splice(userIndex, 1);
  saveUsers(); // Save to file
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});