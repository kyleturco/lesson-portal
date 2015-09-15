'use strict';

var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var passport = require('passport');

var app = express();

app.use(express.static(__dirname + "/build"));

app.get('/teacher-home', function (req, res) {
  console.log("I received a get request");

    var students = [
      {
        name: "Michael Jordan",
        lessonTime: "2:30pm",
        lessonDay: "Thursday"
      },
      {
        name: "Dennis 'The Man' Rodman",
        lessonTime: "4:30pm",
        lessonDay: "Friday"
      },
      {
        name: "Scottie Pippen",
        lessonTime: "5:30pm",
        lessonDay: "Tuesday"
      }
    ]

    res.json(students);
})


app.listen(3000);
console.log("Server running on port 3000");


// var server = require('http').createServer(app);

// 404 handling
// app.use(function(req, res, next) {
//   var err = new Error('Not found');
//   err.status = 404;
//   next(err);
// });
