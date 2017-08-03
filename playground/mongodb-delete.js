// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect to mongoDB server');
  }
  console.log('Connected to mongoDB server');

  // db.collection('Todos').deleteMany({text: "Do homework"}).then((result) => {
  //   console.log(result);
  // });
  //
  // db.collection('Todos').deleteOne({text: "Do homework"}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    console.log(result);
  });

  // db.close();
});
