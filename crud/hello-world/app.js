const path = require('path');
const express = require('express');
const mongoClient = require('./mongo-client.js');
const app = express();
const port = 3000;

// for parsing application/json
app.use(express.json());
// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Hello CRUD!'));
app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

//CREATE
app.post('/addname', (req, res) => {
  console.log('post happened');
  console.log(req.body);
  console.log(req.body.firstname);
  console.log(req.body.lastname);

  mongoClient.addName(req.body.firstname, req.body.lastname);
  res.send('success');
});

//READ
app.get('/getnames', (req,res) => {
  console.log('getNames');
  mongoClient.getNames((names) => {
    res.send(names);
  });
})

//UPDATE
app.get('/update', (req,res) => {
  mongoClient.update((result) => {
    res.send(result);
  });
})

//DELETE
app.get('/delete', (req, res) => {
    mongoClient.deleteName('foo', 'bar', function(result) {
      res.send(result);
    });
});

app.listen(port, () => console.log(`listening on port ${port}`));
