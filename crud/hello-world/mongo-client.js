const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017'

// Database Name
const dbName = 'myproject';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  console.log(db);

  console.log(db.databaseName);

  client.close();
});

const addName = (first, last) => {
  MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("addName: Connected successfully to server");

    const db = client.db(dbName);

    db.collection('names').insertOne({
      firstname: first,
      lastname: last,
    })

    client.close();
  });
}

module.exports = {
  addName,
}
