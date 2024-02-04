// define class acts as a controller for app's routes
class AppController {
  // define a static method
  // Static methods can be called directly on the class itself, without instantiating it
  // This method takes two parameters, req and res, which represent 
  // the HTTP request and response objects
  static getHomepage(req, res) {
    // Send a 200 OK HTTP status code and a text response 'Hello Holberton School!' to the client
    // The .status(200) method sets the HTTP status for the response
    // The .send('Hello Holberton School!') method sets the response body
    res.status(200).send('Hello Holberton School!');
  }
}

// Export the AppController class
// This makes the AppController class available for import in other files
// Allowing other parts of the application to use the getHomepage method for routing
module.exports = AppController;
