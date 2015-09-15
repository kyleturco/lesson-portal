'use strict';
// Dependencies
var express     = require('express'),
    path        = require('path'),
    mongoose    = require('mongoose'),
    bodyParser  = require('body-parser'),
    path        = require('path'),
    passport    = require('passport');

// Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/build"));

// MongoDB
mongoose.connect('mongodb://localhost/lessonportal')

// Routes
app.use('/api', require('./routes/routes'));

// Start Server
var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Listening on port ' + port);
})



// not relevant yet
// var mongoUrl = require ('./lib/secrets')

// Set up routers
// var router = express.Router();


// 404 handling
// app.use(function(req, res, next) {
//   var err = new Error('Not found');
//   err.status = 404;
//   next(err);
// });
