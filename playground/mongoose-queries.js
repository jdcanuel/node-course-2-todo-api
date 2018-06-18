const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
// var id = '5b27373b94d2902a0482642211';
//
// if(!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos' ,todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// })

// Todo.findById(id).then((todoone) => {
//   if(!todoone) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by Id', todoone);
// }).catch((e) => console.log(e));

var userId = '5b26055c85818304b8a7b070';

if(!ObjectID.isValid(userId)){
  return console.log('User id not valid');
}

User.findById(userId).then((user) => {
  if(!user) {
    return console.log('User not found');
  }

  console.log('User found', user);
})
