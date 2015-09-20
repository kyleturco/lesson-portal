'use strict';

// Dependencies
var express       = require('express'),
    logger        = require('morgan'),
    cookieParser  = require('cookie-parser'),
    bodyParser    = require('body-parser'),
    session       = require('express-session'),
    path          = require('path'),
    hash          = require('bcrypt-nodejs'),
    mongoose      = require('mongoose'),
    passport      = require('passport'),
    config        = require('./lib/secrets'),
    routes        = require('./routes/routes'),
    users          = require('./routes/users'),
    localStrategy = require('passport-local').Strategy;

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

// mongoose
mongoose.connect('mongodb://localhost:27017/lessonportal')

// define middleware
// app.use(express.static(path.join(__dirname, '../client')));
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    secret: config.sessionSecret,
    resave: false,
    saveUninitialized: false
}));
// initialize passport
app.use(passport.initialize());
// enable persistent login sessions
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'build')));

// Routes
app.use('/', routes);

// configure passport
var User = require('./models/user.model');
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

// Start Server
var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Listening on port ' + port);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function(err, req, res) {
  res.status(err.status || 500);
  res.end(JSON.stringify({
    message: err.message,
    error: {}
  }));
});

module.exports = app;

