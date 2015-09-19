'use strict';

// Dependencies
var express   = require('express'),
    passport  = require('passport'),
    router    = express.Router(),
    auth      = require('./auth/auth.routes')

// Routes
// User.methods(['get', 'put', 'post', 'delete']);
// User.register(router, '/users')

router.use('/', auth);

router.get('/users', function(req, res) {

  // var u = new User({name: 'John'});
  // u.save(function (err, user) {
  //   res.send(user)
  // })

  User.find(function (err, users) {
    res.json(users);
  });
})

router.get('/logout', auth);

// Return router
module.exports = router;
