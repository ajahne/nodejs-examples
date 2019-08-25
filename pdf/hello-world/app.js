const pdfjsLib = require('pdfjs-dist');
const writeFile = require('../../express/edit-page/write-file.js');

const pdfPath = 'Hello World.pdf';
const loadingTask = pdfjsLib.getDocument(pdfPath);

loadingTask.promise.then(function(doc) {
  const numPages = doc.numPages;
  console.log('# Document Loaded');
  console.log('Number of Pages: ' + numPages);
  console.log();
  // console.log(doc);

  const loadPage = function(pageNum) {
    return doc.getPage(pageNum).then(function(page) {
      console.log('# Page ' + pageNum);
      let textContent;

      return page.getTextContent().then(function(content) {
        // Content contains lots of information about the text layout and
        // styles, but we need only strings at the moment

        const strings = content.items.map(function(item, index, array) {
          // console.log(`item: ${item.str}, ${item.transform[5]}`);
          //.transform[5] is the y position of the current line
          //if a new "y", then its a new line, so add newline character
          let str = item.str;
          if (index === 0 || item.transform[5] !== array[index-1].transform[5]) {
            str += '\n';
          }
          // return item.str;
          return str;
        });
        console.log('## Text Content');
        textContent = strings.join('');
        console.log(textContent);
      }).then(function() {
        writeFile('file.txt', textContent);
      });
    });
  };

  loadPage(1);
});
