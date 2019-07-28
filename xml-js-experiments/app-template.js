const xml2js = require('xml2js');
const parseString = xml2js.parseString;
const fs = require('fs');
const util = require('util');
const writeFile = require('../express/edit-page/write-file.js');

const log = (message) => {
  console.log(util.inspect(message, false, null));
}

fs.readFile('./xml/appTemplate.xml', 'utf8', (err, data) => {
  if (err) throw err;
  // console.log(data);
  parseString(data, function (err, result) {
      // log(result);
      log(result.client.game[0]);
      log(result.client.game[0]['$'].name);
      const xml = editXml(result);
      saveXml(xml)
  });
});

const editXml = (xml) => {
  xml.client.game[0]['$'].name = 'New Application Template';
  return xml;
}

const saveXml = (xml) => {
  const builder = new xml2js.Builder();
  const newXml = builder.buildObject(xml);
  writeFile('xml/newxml.xml', newXml);
}
