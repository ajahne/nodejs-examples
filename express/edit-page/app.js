const express = require('express');
const fs = require('fs');
const path = require('path');
const appendFile = require('./append-file.js');
const writeFile = require('./write-file.js');

const app = express();
const port = 3001;

app.use(express.static('html'));
app.use(express.static('scripts'));
app.use(express.json())                         // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => res.send('Hello World!'));

app.put('*', (req, res) => {
  console.log('PUT: editing happening');
  console.log(req.body);
  res.send('successful put');

  const filename = path.join(__dirname + '/html/index.html');
  writeFile(filename, req.body.html);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
