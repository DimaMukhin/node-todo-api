// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect to mongoDB server');
  }
  console.log('Connected to mongoDB server');

  db.collection('Todos').insertOne({
    text: 'Something to do',
    completed: false
  }, (err, result) => {
    if (err)
      return console.log('Unable to insert todo', err);

    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  db.collection('Users').insertOne({
    name: 'Dima',
    age: 24,
    location: 'Winnipeg'
  }, (err, result) => {
    if (err)
      return console.log('Unable to insert user', err);

    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  db.close();
});
