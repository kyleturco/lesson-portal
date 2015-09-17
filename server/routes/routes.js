'use strict';

// Dependencies
var express = require('express'),
    router  = express.Router(),
    User = require('../models/user.model')

// Models
// var Student = require('../models/students')

// Routes
// Student.methods(['get', 'put', 'post', 'delete']);
// Student.register(router, '/students')


router.get('/users', function(req, res) {
  // var u = new User({name: 'John'});
  // s.save(function (err, student) {
  //   res.send(student)
  // })
  User.find(function (err, students) {
    res.json(students);
  });
})

// Return router
module.exports = router;
