var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://jdcanuel:JestoneCanuel020688@ds159400.mlab.com:59400/mongo-data' || 'mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose
}
