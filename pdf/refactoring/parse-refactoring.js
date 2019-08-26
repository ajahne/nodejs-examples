const pdfjsLib = require('pdfjs-dist');
const writeFile = require('../../express/edit-page/write-file.js');

// Loading file from file system into typed array
const pdfPath = '../assets/refactoring-improving-existing-2nd.pdf';
const outputFile = '../assets/refactoring.txt';

let textContent = '';

// Will be using promises to load document, pages and misc data instead of
// callback.
const loadingTask = pdfjsLib.getDocument(pdfPath);
loadingTask.promise.then(function(doc) {
  const numPages = doc.numPages;
  // console.log('# Document Loaded');
  // console.log('Number of Pages: ' + numPages);
  // console.log();

  let lastPromise; // will be used to chain promises
  lastPromise = doc.getMetadata().then(function (data) {
    // console.log('# Metadata Is Loaded');
    // console.log('## Info');
    // console.log(JSON.stringify(data.info, null, 2));
    // console.log();
    if (data.metadata) {
      // console.log('## Metadata');
      // console.log(JSON.stringify(data.metadata.getAll(), null, 2));
      // console.log();
    }
  });

  const loadPage = function (pageNum) {
    return doc.getPage(pageNum).then(function (page) {
      // console.log('# Page ' + pageNum);
      const viewport = page.getViewport({ scale: 1.0, });
      // console.log('Size: ' + viewport.width + 'x' + viewport.height);
      // console.log();
      return page.getTextContent({normalizeWhitespace:true}).then(function (content) {
        // Content contains lots of information about the text layout and
        // styles, but we need only strings at the moment
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
        textContent += strings.join('');
      }).then(function () {
        // console.log();
      });
    });
  };

  // Loading of the first page will wait on metadata and subsequent loadings
  // will wait on the previous pages.
  for (let i = 1; i <= numPages; i++) {
    lastPromise = lastPromise.then(loadPage.bind(null, i));
  }
  return lastPromise;
}).then(function () {
  console.log('# End of Document');
  // console.log(textContent);
  writeFile(outputFile, textContent);
}, function (err) {
  console.error('Error: ' + err);
});
