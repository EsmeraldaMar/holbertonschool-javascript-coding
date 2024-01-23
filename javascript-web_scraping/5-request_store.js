#!/usr/bin/node
const request = require('request');
const url = process.argv[2];
const fs = require('fs'); // For File IO
const file = process.argv[3];

request(url, function (error, response, body) {
  if (error) {
    console.error(error);
  } else {
    fs.writeFile(file, body, 'utf-8', function (error) {
      if (error) {
        console.log(error);
      }
    }
    );
  }
}
);
