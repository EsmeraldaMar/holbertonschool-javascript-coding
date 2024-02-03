// Import express module
const express = require('express');

// Instantiate an express application
const app = express();

// Created an entry point for the Express app to listening on port 1245
// Code tells service to listen to any request coming to the / route
// once request is received, it displays given message
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Create a NodeJS hhtsp listener on port 1245 points to Express
// Use a callback function to tell when server is created
app.listen(1245, () => {
  console.log('server is running on port 1245');
});

// export the app
module.exports = app;
