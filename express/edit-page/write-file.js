const fs = require('fs');
const path = require('path');

const writeFile = (filename, data) => {
  fs.writeFile(filename, data, (err) => {
    if (err) throw err;
    console.log('file written');
  });
}

module.exports = writeFile;
