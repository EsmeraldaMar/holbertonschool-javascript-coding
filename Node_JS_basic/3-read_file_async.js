// Import the required modules
// using promises for async
const fs = require('fs').promises;
// eslint-disable-next-line no-unused-vars
const path = require('path');

// Define function to async function
// eslint-disable-next-line no-unused-vars
async function countStudents(filePath) {
  try {
    // Read the file asynchronously
    const data = await fs.readFile(filePath, { encoding: 'utf-8'});
    // Split the data into an array of lines, filter out empty lines
    let students = data.split('\n').filter((line) => line.trim());

    // Remove the header row
    students.shift();

    // Filter out any empty lines
    students = students.filter((student) => student.length > 0);

    // Log total number of students
    console.log(`Number of students: ${students.length}`);

    // Initialise an obj to store count of students
    const fieldCounts = {};

    // Process each student
    students.forEach((student) => {
      const parsedStudent = student.split(',');
      // Initialise with empty array if field doesn't exist
      if (!fieldCounts[parsedStudent[3]]) {
        fieldCounts[parsedStudent[3]] = [];
      }
      // Add student's first name to the field
      fieldCounts[parsedStudent[3]].push(parsedStudent[0]);
    });
  } catch (err) {
    // If reading the file fails, throw an error
    console.error('Cannot load the database');
  }
}
