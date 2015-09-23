var mongo = require('../lib/mongodb.js');
var ObjectID = require('mongodb').ObjectID;

function Student(s) {
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
  student.teacherID = user._id;
  mongo.getDb().collection('students').insertOne(student, function (err, data) {
    console.log(data);
    cb(err, data);
  })
}

Student.findAll = function (user, cb) {
  mongo.getDb().collection('students').find({"teacherID": user._id}).toArray(function (err, data) {
    console.log(data);
    cb(err, data);
  })
}

// Delete function (Not working yet!)
// Student.delete = function (user, cb) {
//   mongo.getDb().collection('students').remove({_id: this._id})
// }

module.exports = Student;
