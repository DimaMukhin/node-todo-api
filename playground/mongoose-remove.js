const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

//Todo.findOneAndRemove

Todo.findByIdAndRemove('5987c662269f98fec0e7a1d5').then((todo) => {
  console.log(todo);
});
