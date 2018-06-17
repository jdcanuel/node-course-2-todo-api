// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} =require('mongodb');



console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('unable to insert to do', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined))
  // });

  // db.collection('Users').insertOne({
  //   name: 'Jestone Canuel',
  //   age: 25,
  //   location: 'Cabanatuan'
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to Insert users', err);
  //   }
  //
  //   console.log(result.ops[0]._id.getTimestamp());
  //console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  client.close();
});
