var mongo = require('mongodb').MongoClient;

var MONGODB_USER = process.env.MONGOLAB_USER || 'teachertracker';
var MONGODB_PASSWORD = process.env.MONGOLAB_PASS || 'password';
var DATABASE_URL = process.env.MONGODB_URL ||
  'mongodb://' + MONGODB_USER + ':' + MONGODB_PASSWORD + '@ds043447.mongolab.com:43447/lesson-portal';

// var url = process.env.MONGODB_URL;

var database;

module.exports.connect = function connect(cb) {
  mongo.connect(DATABASE_URL, function (err, db) {
    database = db || null;
    cb(err, db);
  })
}

module.exports.getDb = function () {
  return database;
};
