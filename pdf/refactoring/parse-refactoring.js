const pdfjsLib = require('pdfjs-dist');
const writeFile = require('../../express/edit-page/write-file.js');

const pdfPath = '../assets/refactoring-improving-existing-2nd.pdf';
const loadingTask = pdfjsLib.getDocument(pdfPath);
// const pageNumber = 3;
const outputFile = '../assets/refactoring.txt';

let text = '';
// let lastPromise;

let promises = [];
loadingTask.promise.then(function(doc) {
  const numPages = doc.numPages;

  const loadPage = function(pageNum) {
    console.log(`loadPage ${pageNum}`);
    let textContent;
    return doc.getPage(pageNum).then(function(page) {
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
        // console.log('## Text Content');
        textContent = strings.join('');
        // console.log('returning text content');
        // console.log(textContent);
        return textContent;
      }).then(function() {
        console.log('***then time***');
        text += textContent;
        return text;
        //writeFile(outputFile, textContent);
        // writeFile(outputFile, text);
      });
    });
  };

  let bound;
  let promise;
  for (let i = 1; i <= 10; i++) {
    // console.log('looping...');
    // lastPromise = lastPromise.then(loadPage.bind(null, i));
    bound = loadPage.bind(null, i);
    promise = bound().then(function() {
      // console.log('hey, no different than a callback!');
    });
    promises.push(promise);
  }
  // return promise;
  Promise.all(promises).then(function(values) {
    console.log(values);
    // console.log(text);
    writeFile(outputFile, text);
  });
}).then(function(){
  console.log('end of document');
})
