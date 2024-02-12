const express = require("express");
const app = express();

// ... (existing code)

// Route to get user data
app.get("/user", (req, res) => {
  const userData = {
    firstName: "Shanmugalakshmi",
    lastName: "Chandrasekaran",
    address: "Fichtenweg 4, 50767 köln",
    hobbies: ["Reading", "Gaming"],
  };
  res.json(userData);
});

// Route to get todos
app.get("/todos", (req, res) => {
  const todos = [
    { id: 1, task: "Complete project", completed: false },
    { id: 2, task: "Review code", completed: true },
  ];
  res.json(todos);
});

// ... (any other routes or middleware)

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
