const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Load routes
const routes = require('./routes/index');
app.use('/', routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

