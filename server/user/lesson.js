var mongo = require('../lib/mongodb.js');
var ObjectID = require('mongodb').ObjectID;

function Lesson(l) {
  this.lessonDate = l.lessonDate;
  this.lessonNotes = l.lessonNotes;
  this.lessonEtc = l.lessonEtc;
  this.studentID = l.studentID;
}

Object.defineProperty(Lesson, "collection", {
  get: function() {
    return global.db.collection('lessons');
  }
})

Lesson.create = function (user, l, cb) {
  var lesson = new Lesson(l);
  lesson.teacherID = user._id;
  mongo.getDb().collection('lessons').insertOne(lesson, function (err, data) {
    console.log(data);
    cb(err, data);
  })
}

Lesson.findAll = function (studentID, user, cb) {
  mongo.getDb().collection('lessons').find({'studentID': studentID.studentID, 'teacherID': user._id}).toArray(function (err, data) {
    console.log(data);
    cb(err, data);
  })
}

// Delete function (Not working yet!)
// Student.delete = function (user, cb) {
//   mongo.getDb().collection('students').remove({_id: this._id})
// }

module.exports = Lesson;
