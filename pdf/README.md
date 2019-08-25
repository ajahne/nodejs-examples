# README

## Hello World
TODO
- make a generic pdf
- setup folder (`npm init -y`)
- npm install what we need (e.g. pdfjs-dist)
```
npm install pdfjs-dist --save
```
- read pdf file
- see if we can find a string in the file

## Resources
- [pdfjs](https://mozilla.github.io/pdf.js/)
- [pdf-parse](https://www.npmjs.com/package/pdf-parse)
- pdfjs examples
  - [getinfo](https://github.com/mozilla/pdf.js/blob/master/examples/node/getinfo.js)
  - [api source](https://github.com/mozilla/pdf.js/blob/master/src/display/api.js)

## Notes
- x, y positions of text in pdf.js, maps to `transform[4]` and `transform[5]`
https://github.com/mozilla/pdf.js/issues/8599
https://stackoverflow.com/questions/50788543/pdf-js-mozilla-lib-issue-get-or-extract-pure-text-with-right-order
