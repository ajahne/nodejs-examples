const pdfjsLib = require('pdfjs-dist');
const writeFile = require('../../express/edit-page/write-file.js');

const pdfPath = '../assets/refactoring-improving-existing-2nd.pdf';
const loadingTask = pdfjsLib.getDocument(pdfPath);
const pageNumber = 2;
const outputFile = '../assets/refactoring.txt';

loadingTask.promise.then(function(doc) {
  const numPages = doc.numPages;
  const loadPage = function(pageNum) {
    return doc.getPage(pageNum).then(function(page) {
      let textContent;
      return page.getTextContent().then(function(content) {
        const strings = content.items.map(function(item, index, array) {
          //.transform[5] is the y position of the current line
          //if a new "y", then its a new line, so add newline character
          let str = item.str;
          if (index > 0 && item.transform[5] !== array[index-1].transform[5]) {
            str = '\n' + str;
          }
          return str;
        });
        console.log('## Text Content');
        textContent = strings.join('');
        console.log(textContent);
      }).then(function() {
        writeFile(outputFile, textContent);
      });
    });
  };
  loadPage(pageNumber);
});
