'use strict';

// Dependencies
var express = require('express'),
    router  = express.Router(),
    Student = require('../models/students')

// Models
// var Student = require('../models/students')

// Routes
// Student.methods(['get', 'put', 'post', 'delete']);
// Student.register(router, '/students')


router.get('/students', function(req, res) {
  // var s = new Student({name: 'John'});
  // s.save(function (err, student) {
  //   res.send(student)
  // })
  Student.find(function (err, students) {
    res.json(students);
  });
})

// Return router
module.exports = router;
