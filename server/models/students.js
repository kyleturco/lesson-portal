
// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var studentSchema = new mongoose.Schema({
  name: String,
  lessonDay: String,
  lessonTime: String
});

// Return model
module.exports = restful.model('Students', studentSchema);
