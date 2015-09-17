// var passport = require('passport')
//   , GoogleStrategy = require('passport-google').Strategy;

// passport.use(new GoogleStrategy({
//     returnURL: 'http://www.example.com/auth/google/return',
//     realm: 'http://www.example.com/'
//   },
//   function(identifier, profile, done) {
//     User.findOrCreate({ openId: identifier }, function(err, user) {
//       done(err, user);
//     });
//   }
// ));

'use strict';

var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
  , passport       = require('passport')
  , config         = require('../lib/secrets')
  // , User           = require('../db/user.model')
  // , UserController = require('../api/user/user.controller');

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

passport.use(new GoogleStrategy({
    clientID: config.google.clientID,
    clientSecret: config.google.clientSecret,
    callbackURL: config.google.callbackURL
  },
  function(token, tokenSecret, profile, done) {
    UserController.signIn(profile, done, token)
  }
));
