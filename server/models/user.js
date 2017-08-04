var mongoose = require('mongoose');

var User = mongoose.model('user', {
  email: {
    type: String,
    required: true,
    trime: true,
    minlength: 1
  }
});

module.exports = { User };
