'use strict';

// Dependencies
var express     = require('express'),
    path        = require('path'),
    mongoose    = require('mongoose'),
    bodyParser  = require('body-parser'),
    passport    = require('passport'),
    routes      = require('./routes/routes'),
    config      = require('./lib/secrets'),
    path        = require('path')

// __dirname === /Users/kyle/projects/lesson-portal/server/
// adding .. == /Users/kyle/projects/lesson-portal/server/../
// path.resolve == /Users/kyle/projects/lesson-portal/

var PROJECT_ROOT = path.resolve(__dirname, '..');
var SERVER_ROOT = PROJECT_ROOT + '/build';

// Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(SERVER_ROOT));

// MongoDB
mongoose.connect('mongodb://localhost:27017/lessonportal')

// Initialize passport
app.use(passport.initialize());

// Enable persistent login sessions
app.use(passport.session());

// Routes
app.use('/api', routes);

require('./auth/config');

// Start Server
var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Listening on port ' + port);
});



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
