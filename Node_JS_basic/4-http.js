// import module
const http = require('http');
// create the server
const app = http.createServer((req, res) => {
  // handle server requests
  // Write header
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // sends response body
  res.end('Hello Holberton School!');
});
  // set server to listen on port
app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

// export variable
module.exports = app;
