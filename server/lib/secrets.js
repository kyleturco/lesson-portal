'use strict';

var path = require('path');

module.exports = {

  // root: path.normalize(__dirname + '/../..'),
  // sessionSecret: 'lessonportal',

  mongo: {
    MONGODB_URL : 'mongodb://localhost:27017/lessonportal'
  },

  google: {
    'clientID': '300924311136-5hoh311884qis4qiomtcfhfi9mbrlu0o.apps.googleusercontent.com',
    'clientSecret': 'Jg8NdqA3KfrnRe0DpYl5U6HG',
    'callbackURL': "http://127.0.0.1:3000/auth/google/callback"
  }
};

// Object.keys(secrets).forEach(function(key){
//   process.env[key] = process.env[key] || secrets[key];
// })
