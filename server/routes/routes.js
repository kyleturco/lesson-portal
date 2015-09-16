'use strict';

// Dependencies
var express = require('express'),
    router  = express.Router()

// Models
var Student = require('../models/students')

// Routes
Student.methods(['get', 'put', 'post', 'delete']);
Student.register(router, '/students')


// Return router
module.exports = router;
