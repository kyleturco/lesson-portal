// var mongo = require('mongodb').MongoClient;

// var url = require('../lib/secrets').db;

// var database;

// module.exports.connect = function connect(cb) {
//   mongo.connect(url, function(err, db) {
//     database = db || null;
//     cb(err, db);
//   })
// }

// module.exports.getDb = function () {
//   return database;
// }

var mongo = require('mongodb').MongoClient;

var url = process.env.MONGODB_URL;

if (!global.db) {
  mongo.connect(url, function(err, db) {
    global.db = db;
  });
}
