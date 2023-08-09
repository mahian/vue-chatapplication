const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

// Parse JSON body
app.use(express.json());

// Set up user routes
userRoutes(app);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
