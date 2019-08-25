const pdfjsLib = require('pdfjs-dist');
const writeFile = require('../../express/edit-page/write-file.js');

const pdfPath = 'Hello World.pdf';
const loadingTask = pdfjsLib.getDocument(pdfPath);

loadingTask.promise.then(function(doc) {
  var numPages = doc.numPages;
  console.log('# Document Loaded');
  console.log('Number of Pages: ' + numPages);
  console.log();
  // console.log(doc);

  var loadPage = function (pageNum) {
    return doc.getPage(pageNum).then(function (page) {
      console.log('# Page ' + pageNum);
      let textContent;
      return page.getTextContent().then(function (content) {
        // Content contains lots of information about the text layout and
        // styles, but we need only strings at the moment
        var strings = content.items.map(function (item) {
          console.log('item.str;' + item.str);
          return item.str;
        });
        console.log('## Text Content');
        textContent = strings.join(' ');
        console.log(textContent);
      }).then(function () {
        writeFile('file.txt', textContent);
        console.log('done');
        console.log();
      });
    });
  };

  loadPage(1);
});
