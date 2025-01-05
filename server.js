// server.js
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files (like images)
app.use(express.static(path.join(__dirname, 'public')));

// Home route to render the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
