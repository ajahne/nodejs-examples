const fs = require('fs');
const path = require('path');

const appendFile = (filename, data) => {
  fs.appendFile(filename, data, (err) => {
    if (err) throw err;
    console.log('data appended');
  });
}

module.exports = appendFile;
