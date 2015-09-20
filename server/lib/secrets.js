'use strict';

var path = require('path');

module.exports = {

  sessionSecret: 'itslessontime',

  mongo: {
    MONGODB_URL : 'mongodb://localhost:27017/lessonportal'
  },
};

// Object.keys(secrets).forEach(function(key){
//   process.env[key] = process.env[key] || secrets[key];
// })


// google: {
//   'clientID': '300924311136-5hoh311884qis4qiomtcfhfi9mbrlu0o.apps.googleusercontent.com',
//   'clientSecret': 'Jg8NdqA3KfrnRe0DpYl5U6HG',
//   'callbackURL': "http://localhost:3000/auth/google/callback"
// }
