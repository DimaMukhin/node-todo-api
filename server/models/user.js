const mongoose = require('mongoose');
const validator = require('validator');

var User = mongoose.model('user', {
  email: {
    type: String,
    required: true,
    trime: true,
    minlength: 1,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email'
    }
  },
  password: {
    type: String,
    require: true,
    minlength: 6
  },
  tokens: [{
    access: {
      type: String,
      require: true
    },
    token: {
      type: String,
      require: true
    }
  }]
});

module.exports = { User };
