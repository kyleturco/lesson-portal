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
var userRoutes = require('./routes/users')
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

app.set('port', process.env.PORT || 3000);

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


app.use('/users', userRoutes)

app.use(function (req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.status(403).send({redirect: true})
  }
})

app.use('/api', api);
// app.use('/', routes);

database.connect(onDbConnect);

function onDbConnect(err, db) {
  if (err) {
    console.error('Database Connection Error.' + err)
  } else {
    console.log('Database Connection Established at' + db.options.url);
    startNodeListener();
  }
}

function startNodeListener () {
  var server = app.listen(app.get('port'), function () {
    var port = server.address().port;
    var mode = app.get('env');

    console.log('Server listening on port ' + port + ' in ' + mode + ' mode...');
  });
}

module.exports = app;
