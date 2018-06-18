var mongoose = require('mongoose');
const port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;

if(port !== 3000) {
  var db = 'mongodb://node-todo:node-todo12345@ds159400.mlab.com:59400/mongo-data';
} else {
  var db = 'mongodb://localhost:27017/TodoApp';
}

mongoose.connect(db);

module.exports = {
  mongoose
}
