// Import required modules
const express = require("express");

// Create an instance of Express
const app = express();
const port = process.env.PORT || 3000; // Set the port

// Define the /home route to return "This is the home page"
app.get('/home', (req, res) => {
  res.json({ message: 'This is the home page' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
