// 'use strict';

// var path = require('path');

// module.exports = {

//   sessionSecret: 'itslessontime',
//   db : 'mongodb://localhost:27017/lessonportal'

// };

// Object.keys(secrets).forEach(function(key){
//   process.env[key] = process.env[key] || secrets[key];
// })


// google: {
//   'clientID': '300924311136-5hoh311884qis4qiomtcfhfi9mbrlu0o.apps.googleusercontent.com',
//   'clientSecret': 'Jg8NdqA3KfrnRe0DpYl5U6HG',
//   'callbackURL': "http://localhost:3000/auth/google/callback"
// }


var secrets = {
  MONGODB_USER: 'lessonuser',
  MONGODB_PASS: 'lessonuser5',
  MONGODB_URL: 'mongodb://localhost:27017/lesson-portal'
};

// module.exports = function () {
//   process.env.LOGGLY_TOKEN = process.env.LOGGY_TOKEN || '2b39c8a0-7e0f-4ab0-895b-a64c5d664a0f'
// }

if (process.env.PRODUCTION) {
  secrets.MONGODB_URL = 'mongodb://ds043447.mongolab.com:43447/lesson-portal'
}

Object.keys(secrets).forEach(function (key) {
  process.env[key] = process.env[key] || secrets[key];
})
