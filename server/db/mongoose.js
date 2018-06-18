var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://node-todo:node-todo12345@ds159400.mlab.com:59400/mongo-data' || 'mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose
}
