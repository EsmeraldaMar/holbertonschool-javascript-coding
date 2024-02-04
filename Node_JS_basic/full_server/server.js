// Import the express module to create an Express application
const express = require('express');

// Initialize the Express application
const app = express();

// Import the routes defined in the './routes/index' file
// This module is expected to export an Express Router with defined routes
const indexRouter = require('./routes/index');

// Mount the imported routes on the root path ('/')
// This means any request to the server's root will be handled by the routes defined in indexRouter
app.use('/', indexRouter);

// Specify the port number on which the server will listen for requests
const port = 1245;

// Start listening for incoming connections on the specified port
// The callback function is executed once the server is up and running
app.listen(port, () => {
  // Log a message to the console indicating the server's
  // running state and the port it's listening on
  console.log(`Server is running on port ${port}`);
});

// Export the Express application instance
// This allows the application to be imported
// and used in other files, which is particularly useful for testing
module.exports = app;
