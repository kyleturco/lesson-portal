
// Dependencies
var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;

// Schema
var studentSchema = new Schema({
  name: String,
  lessonDay: String,
  lessonTime: String
});

// Return model
module.exports = mongoose.model('Student', studentSchema);
