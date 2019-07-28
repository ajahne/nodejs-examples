const express = require('express');
const fs = require('fs');
const path = require('path');
const appendFile = require('./append-file.js');

const app = express();
const port = 3001;

const writeFile = (data) => {
  fs.writeFile('result.json', data.toString(), (err) => {
    if (err) {
      console.log('error');
    }
    console.log('file written');
  });
}

app.use(express.static('html'));
app.use(express.static('scripts'));
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => res.send('Hello World!'));

app.put('*', (req, res) => {
  console.log('PUT: editing happening');
  // console.log(req);
  console.log(req.body);
  res.send('successful put');
  // writeFile(req);

  const filename = path.join(__dirname + '/html/index.html');
  appendFile(filename, '<h3>Updated!</h3>');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
