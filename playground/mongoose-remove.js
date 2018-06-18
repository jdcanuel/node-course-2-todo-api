const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//Todo.remove
//Todo.findoneAndRemove
//Todo.findByIdAndRemove

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findByIdAndRemove('5b27ef7f2b2906bb6cf77e9c').then((result) => {
  console.log(result);
});

// Todo.findOneAndRemove({OBJECT}).then((result) => {
//
// });
