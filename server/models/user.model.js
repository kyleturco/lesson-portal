
// Dependencies
var mongoose  = require('mongoose'),
    Schema    = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');

// // Schema
// var userSchema = new Schema({
//   gid: String,
//   token: String,
//   name: String,
//   email: String,
//   teacher: Boolean
// });

var User = new Schema ({
  username: String,
  password: String
});

User.plugin(passportLocalMongoose);

// Return model
module.exports = mongoose.model('users', User);
