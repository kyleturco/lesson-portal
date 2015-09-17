'use strict';

var express   = require('express')
  , passport  = require('passport')
  , router    = express.Router()

// Redirect the user to Google for authentication.  When complete, Google
// will redirect the user back to the application at
//     /auth/google/return
app.get('/auth/google', passport.authenticate('google'));

// Google will redirect the user to this URL after authentication.  Finish
// the process by verifying the assertion.  If valid, the user will be
// logged in.  Otherwise, authentication has failed.
app.get('/auth/google/return',
  passport.authenticate('google', { successRedirect: '/',
                                    failureRedirect: '/login' }));

module.exports = router;


// 'use strict';

// var express = require('express');
// var router = express.Router();

// var ctrl = require('./controller');

// router.get('/auth/twitter', ctrl.authTwitter);
// router.get('/auth/twitter/cb', ctrl.authTwitterCb);

// router.get('/logout', ctrl.logout);
// router.get('/profile', isLoggedIn, ctrl.show);

// router.get('/user/search', ctrl.search);

// module.exports = router;

// function isLoggedIn(req, res, next) {
//   if (req.isAuthenticated()) {
//     return next();
//   }

//   res.redirect('/');
// }
