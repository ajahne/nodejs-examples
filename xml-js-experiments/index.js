const parseString = require('xml2js').parseString;
const xml = "<root>Hello xml2js!</root>";

parseString(xml, function (err, result) {
    console.dir(result);
    console.log(result.root);
});
