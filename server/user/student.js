var mongo = require('../lib/mongodb.js');
var ObjectID = require('mongodb').ObjectID;

var Student = function (stu) {
  this.name = stu.name;
  this.lessonDay = stu.lessonDay;
  this.lessonTime = stu.lessonTime;
}

Student.saveNew = function (user, student, cb) {
  console.log(student);
  student.authorID = user._id;
  student.author = user.username;
  var student = new Student(student);
  console.log(student);
  mongo.getDb().collection('students').insertOne(student, cb)
}


// Workout.saveNew = function (userObj, workoutObj, cb) {
//   console.log(workoutObj)
//   workoutObj.authorid = userObj._id;
//   workoutObj.author = userObj.username;
//   var workout = new Workout(workoutObj)
//   console.log(workout)
//   mongo.getDb().collection('workouts').insertOne(workout, cb)
// }

// Workout.findAll = function (userObj, cb) {
//   mongo.getDb().collection('workouts').find({"authorid": userObj._id}).toArray(function (err, data) {
//     cb(err, data);
//   })
// }

// Workout.findOne = function (id, cb) {
//   mongo.getDb().collection('workouts').findOne({_id: ObjectID(id)}, function (err, data) {
//     cb(err, data)
//   })
// }

// Workout.saveProg = function (userObj, progObj, cb) {
//   console.log('save program is running')
//   progObj.author = userObj.username;
//   progObj.authorid = userObj._id;
//   mongo.getDb().collection('programs').insertOne(progObj, cb)
// }

// Workout.findCompleted = function (userObj, compWork, cb) {
//   console.log('cat master')
//   console.log(compWork)
//   compWork.workoutId = compWork._id;
//   compWork.date = new Date();
//   delete compWork._id;
//   mongo.getDb().collection('completed').updateOne({userId: userObj._id}, {$push: {completed: compWork}}, {upsert: true}, cb)
// }

// Workout.pullCompleted = function (userObj, cb) {
//   mongo.getDb().collection('completed').findOne({userId: userObj._id}, function (err, past) {
//     Workout.scheduler(err, past, cb)
//   })
// }

// Workout.scheduler = function (err, past, cb) {
//   console.log(past)
//   if (past) {
//     var parcel = {
//       color: "black",
//       textColor: "yellow",
//       allDayDefault: true
//     }
//     parcel.events = past.completed.map(function (wo) {
//       wo.title = wo.name
//       wo.start = wo.date.toLocaleDateString('en-US')
//       return wo
//     })
//     cb(null, parcel)
//   } else {
//     cb(err, null)
//   }
// }

// module.exports = Workout;
