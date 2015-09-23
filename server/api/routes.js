'use strict';
var express = require('express');
var router = express.Router();

var studentCtrl   = require('../routes/student.controller.js'),
    lessonCtrl    = require('../routes/lesson.controller.js')

router.post('/students', studentCtrl.save);
router.get('/students', studentCtrl.findAll);

router.post('/lessons', lessonCtrl.save);
router.post('/lessons/retrieve', lessonCtrl.findAll);


module.exports = router;
