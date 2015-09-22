var mongo = require('../lib/mongodb.js');
var ObjectID = require('mongodb').ObjectID;

function Student(s) {
  this.userId = ObjectID(s.userId);
  this.name = s.name;
  this.lessonDay = s.lessonDay;
  this.lessonTime = s.lessonTime;
}

Object.defineProperty(Student, "collection", {
  get: function() {
    return global.db.collection('students');
  }
})

Student.create = function (user, s, cb) {
  var student = new Student(s);
  mongo.getDb().collection('students').insertOne(student, function (err, data) {
    console.log(data);
    cb(err, data);
  })
}


// Student.saveNew = function (user, student, cb) {
//   console.log(student);
//   student.authorID = user._id;
//   student.author = user.username;
//   var student = new Student(student);
//   console.log(student);
//   mongo.getDb().collection('students').insertOne(student, cb)
// }

Student.findAll = function (user, cb) {
  mongo.getDb().collection('students').find({"authorid": user._id}).toArray(function (err, data) {
    cb(err, data);
  })
}

module.exports = Student;
