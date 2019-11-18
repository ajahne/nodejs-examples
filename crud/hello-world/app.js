const path = require('path');
const express = require('express');
const mongoClient = require('./mongo-client.js');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello CRUD!'));
app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/addname', (req, res) => {
  console.log('post happened');
  console.log(req.body);
  mongoClient.addName('test-first-name', 'test-last-name');
  res.send('success');
});

app.listen(port, () => console.log(`listening on port ${port}`));
