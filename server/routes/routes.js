'use strict';

// Dependencies
var express = require('express'),
    router  = express.Router(),
    User = require('../models/user.model')

// Models
// var User = require('../models/users')

// Routes
// User.methods(['get', 'put', 'post', 'delete']);
// User.register(router, '/users')


router.get('/users', function(req, res) {

  // var u = new User({name: 'John'});
  // u.save(function (err, user) {
  //   res.send(user)
  // })

  User.find(function (err, users) {
    res.json(users);
  });
})

// Return router
module.exports = router;
