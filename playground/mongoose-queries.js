const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');

var id = '5986349988f24f3e80307fee';

Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos', todos);
});

Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
  console.log('Todo by id', todo);
}).catch((e) => console.log(e));
