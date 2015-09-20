'use strict';

// Dependencies
var express   = require('express'),
    passport  = require('passport'),
    User      = require('../models/user.model'),
    router    = express.Router();

router.get('/', function (req, res) {
    res.render('index', { user : req.user });
});

router.get('/register', function(req, res) {
    res.render('register', { });
});

router.post('/register', function(req, res, next) {
    Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
        if (err) {
          return res.render("register", {info: "Sorry. That username already exists. Try again."});
        }

        passport.authenticate('local')(req, res, function () {
            req.session.save(function (err) {
                if (err) {
                    return next(err);
                }
                res.redirect('/');
            });
        });
    });
});


router.get('/login', function(req, res) {
    res.render('login', { user : req.user });
});

router.post('/login', passport.authenticate('local'), function(req, res, next) {
    req.session.save(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
});

router.get('/logout', function(req, res, next) {
    req.logout();
    req.session.save(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
});

router.get('/ping', function(req, res){
    res.status(200).send("pong!");
});

module.exports = router;


// // Routes
// // User.methods(['get', 'put', 'post', 'delete']);
// // User.register(router, '/users')

// router.use('/', auth);

// router.get('/users', function(req, res) {

//   // var u = new User({name: 'John'});
//   // u.save(function (err, user) {
//   //   res.send(user)
//   // })

//   User.find(function (err, users) {
//     res.json(users);
//   });
// })

// router.get('/logout', auth);

// // Return router
// module.exports = router;
