
// Dependencies
var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;

// Schema
var userSchema = new Schema({
  gid: String,
  token: String,
  name: String
  email: String;
  teacher: Boolean;
});

// Return model
module.exports = mongoose.model('User', userSchema);
