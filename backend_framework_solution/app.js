const express = require('express');
const app = express();
const port = 3000; // You can choose any port number

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
