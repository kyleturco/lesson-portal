// Dependencies
var mongoose  = require('mongoose'),
    Schema    = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');

var Student = new Schema ({
  name: String,
  lessonDay: String,
  lessonTime: String
});

User.plugin(passportLocalMongoose);

// Return model
module.exports = mongoose.model('students', Student);

