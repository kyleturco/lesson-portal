var mongo = require('mongodb').MongoClient;

var url = require('../lib/secrets').mongo.url;

var database;

module.exports.connect = function connect(cb) {
  mongo.connect(url, function (err, db) {
    database = db || null;
    cb(err, db);
  })
}

module.exports.getDb = function () {
  return database;
};
