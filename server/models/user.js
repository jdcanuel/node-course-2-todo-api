var mongoose = require('mongoose');

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

// var newUser = new User({
//   email: ' jdcanuel@gmail.com '
// });
//
// newUser.save().then((doc) => {
//   console.log('Save new user', doc);
// }, (err) => {
//   console.log('Unable to save new user', err);
// });

module.exports = {User};
