'use strict'

var express         = require('express'),
    sass            = require('node-sass-middleware'),
    bodyParser      = require('body-parser'),
    api             = require('./api/routes'),
    secrets         = require('./lib/secrets'),
    session         = require('express-session'),
    path            = require('path'),
    cookieParser    = require('cookie-parser');

//bringing in the database module
var database = require('./lib/mongodb');

var PROJECT_ROOT = path.resolve(__dirname, '..');
var SERVER_ROOT = PROJECT_ROOT + '/build';

var app = express();
app.use(express.static(SERVER_ROOT));

//session middleware
app.use(session({
  secret: 'doesthismakeitwork',
  resave: false,
  saveUninitialized: true
}))

app.use(function (req, res, next) {
  console.log('SESSION>>>>>>>>>>', req.session)
  next();
})

//setting the local user value for that response
app.use(function getAuthStatus(req, res, next) {
  if (req.session.user) {
    console.log(req.session.user)
    res.locals.user = req.session.user;
  } else {
    res.locals.user = null;
  }
  next();
})

app.set('view engine', 'jade');
app.use(sass({
  dest: 'www/css',
  outputStyle: 'compressed',
  prefix: '/css',
  sourceMap: app.get('env') === 'production' ? 'false' : true,
  src: '../styles',
  force: true
}));

//makes the body available from post requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(function (req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.send(403, {redirect: true})
  }
})

var userRoutes = require('./routes/users')

app.use('/users', userRoutes)
app.use('/api', api);
// app.use('/', routes);

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
