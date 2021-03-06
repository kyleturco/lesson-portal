
// Dependencies
var mongoose  = require('mongoose'),
    Schema    = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema ({
  username: String,
  password: String
});

User.plugin(passportLocalMongoose);

// Return model
module.exports = mongoose.model('users', User);
