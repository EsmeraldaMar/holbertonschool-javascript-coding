const fs = require('fs');
const path = require('path');

function countStudents() {
  const dbFilePath = path.join(__dirname, 'database.csv');
  try {
    const data = fs.readFileSync(dbFilePath, { encoding: 'utf-8' });
    const myArray = data.split('\n');
    console.log(myArray);
    myArray.shift();
    myArray.forEach((student) => {
      const parsedStudent = student.split(',');
      console.log(parsedStudent[3]);
  });
    console.log(`Number of students: ${myArray.length}`);
    // const db = JSON.parse(data);
  } catch (err) {
    console.log('whatever');
  }
}
countStudents();
