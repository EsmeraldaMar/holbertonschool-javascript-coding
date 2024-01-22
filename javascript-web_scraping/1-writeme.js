#!/usr/bin/node
const fs = require('fs');
const file = process.argv[2];
const content = process.argv[3];
fs.writeFile(file, content, 'utf-8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
}
);
