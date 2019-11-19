const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017'

// Database Name
const dbName = 'myproject';

//holder for database object
let db;

MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  // Use connect method to connect to the server
  console.log("Connected successfully to server");
  db = client.db(dbName);
  // client.close();
});

//create
const addName = (first, last) => {
  db.collection('names').insertOne({
    firstname: first,
    lastname: last,
  })
  .then(function(result) {
    console.log('addName() result:');
    console.log(result);
  })
  .catch(err => {
    console.error(err)
  });
}

//read
const getNames = (cb) => {
  console.log('getNames');
  const names = [];
  db.collection('names').find().toArray((err, result) => {
    if (err) {
      return console.log(err);
    } else {
      console.log('returning from getNames');
      console.log(result);
      // return result;
      cb(result);
    }
  });
}

//update
const update = (cb) => {
  db.collection('names').updateOne(
    {firstname:'bar'},
    {$set: {firstname: 'fizz', lastname:'buzz'},
     $currentDate: {lastModified:true}}
  )
  .then(function(result) {
    cb(result);
  });
}

module.exports = {
  addName,
  getNames,
  update,
}
