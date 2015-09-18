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

router.get('/logout', function(req, res){
  // var name = req.user.username;
  // console.log("LOGGIN OUT " + req.user.username)
  req.logout();
  res.redirect('/');
  req.session.notice = "You have successfully been logged out " + name + "!";
});


// Return router
module.exports = router;
