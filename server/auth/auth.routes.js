'use strict';

// Dependencies
var express = require('express'),
    passport = require('passport'),
    router  = express.Router(),
    User = require('../models/user.model')

router.get('/auth/google', passport.authenticate('google', { scope: 'https://www.googleapis.com/auth/plus.login' }))

router.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function (req, res) {
    res.redirect('/');
  });

// Return router
module.exports = router;
