// Import the express module to use its functionalities
const express = require('express');

// Create a new router instance to define routes for the application
const router = express.Router();

// Import AppController to handle requests to the homepage
const AppController = require('../controllers/AppController');
// Import StudentsController to handle requests related to students information
const StudentsController = require('../controllers/StudentsController');

// Define a route for the homepage ('/') and delegate handling to the getHomepage method of AppController
router.get('/', (req, res) => {
  AppController.getHomepage(req, res);
});

// Define a route for getting all students ('/students') and delegate handling to the getAllStudents method of StudentsController
router.get('/students', (req, res) => {
  StudentsController.getAllStudents(req, res);
});

// Define a route for getting students by their major ('/students/:major')
// This uses a URL parameter named 'major' to dynamically filter students
// Delegates handling to the getAllStudentsByMajor method of StudentsController
router.get('/students/:major', (req, res) => {
  StudentsController.getAllStudentsByMajor(req, res);
});

// Export the router to be used in other parts of the application, such as the main app file
// This modularizes route definitions, making the codebase cleaner and more maintainable
module.exports = router;
