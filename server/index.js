const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Enable Cross-Origin Resource Sharing (CORS) for all routes
// This allows your frontend application to make requests to your backend server
// from a different origin (e.g., different port or domain)
app.use(cors());

// Middleware to parse JSON bodies in requests
app.use(express.json());

// Example route
app.get('/api', (req, res) => {
  res.send('Checking api response');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});