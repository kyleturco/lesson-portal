'use strict';
var express = require('express');
var router = express.Router();

var studentCtrl = require('../routes/student.controller.js');

router.post('/students', studentCtrl.save);
// router.get('/students', studentCtrl.findAll);


module.exports = router;
