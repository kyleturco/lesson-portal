'use strict';

var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy,
    passport       = require('passport'),
    config         = require('../lib/secrets'),
    User           = require('../db/user.model'),
    UserController = require('server/auth/user.controller');

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
