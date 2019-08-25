const fs = require('fs');
const pdf = require('pdf-parse');
const writeFile = require('../../express/edit-page/write-file.js');

const dataBuffer = fs.readFileSync('Hello World.pdf');

const DEFAULT_OPTIONS = {
  max: -1,
}

pdf(dataBuffer, DEFAULT_OPTIONS).then(function(data) {

    // number of pages
    console.log(data.numpages);
    // number of rendered pages
    console.log(data.numrender);
    // PDF info
    console.log(data.info);
    // PDF metadata
    console.log(data.metadata);
    // PDF.js version
    // check https://mozilla.github.io/pdf.js/getting_started/
    console.log(data.version);
    // PDF text
    console.log(data.text);

    writeFile('file.txt', data.text);

});
