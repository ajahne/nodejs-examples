const xml2js = require('xml2js');
const parseString = xml2js.parseString;
const fs = require('fs');
const util = require('util');
const writeFile = require('../express/edit-page/write-file.js');

// const xmlFile = './xml/app.xml';
const xmlFile = './xml/appTemplate.xml';

const log = (message) => {
  console.log(util.inspect(message, false, null));
}

const editXml = (xml) => {
  xml.client.game[0]['$'].name = 'New Application Template';
  return xml;
}

const saveXml = (xml) => {
  const builder = new xml2js.Builder();
  const newXml = builder.buildObject(xml);
  writeFile('xml/newxml.xml', newXml);
}

const printAttribute = (result) => {
  const game = result.client.game[0];
  const attributes = game.attribute;

  const color = attributes.find(function(attribute) {
    return attribute['$'].name === 'color';
  });

  // console.log(found);
  printLevel(color);
  // log(color);
}

// [
// { _: 'Orange is a color', '$': { key: 'description', locale: 'en' } },
// { _: 'Orange', '$': { key: 'displayname', locale: 'en' } },
// { _: 'icon-color-orange', '$': { key: 'icon', locale: 'en' } }
// ]
const printLevel = (attribute) => {
  const language = attribute.level[1].language;
  //find the object with the key of displayname, then grab then info
  log(language);
  log(language[0]['_']); // 'Orange is a color';
}

fs.readFile(xmlFile, 'utf8', (err, data) => {
  if (err) throw err;
  // console.log(data);
  parseString(data, function (err, result) {
    // log(result);
    // log(result.client.game[0]);
    printAttribute(result);
    // log(result.client.game[0]);
    // log(result.client.game[0]['$'].name);
    const xml = editXml(result);
    saveXml(xml)
  });
});
