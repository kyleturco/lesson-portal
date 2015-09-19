'use strict';

// Dependencies
var express = require('express'),
    passport = require('passport'),
    router  = express.Router(),
    User = require('../models/user.model'),
    ctrl = require('../auth/user.controller')

router
  .get('/auth/google', passport.authenticate('google', { scope: 'https://www.googleapis.com/auth/plus.login' }))
  .get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function (req, res) {
      res.redirect('/');
    })
  .get('/auth/logout', ctrl.logout);

// Return router
module.exports = router;
