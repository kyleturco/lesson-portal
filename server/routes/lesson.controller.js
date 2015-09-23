var Lesson = require('../user/lesson')

module.exports = {
  save: function (req, res) {
    Lesson.create(req.session.user, req.body, function (err, data) {
      if (err) {
        res.status(500).send(err)
      } else {
        res.status(200).send("Lesson saved");
      }
    })
  },

  findAll: function (req, res) {
    Lesson.findAll(req.session.user, function (err, data) {
      res.send(data);
    })
  },

  delete: function (req, res) {
    Lesson.delete(req.session.user, function (err, data) {
      if (err) {
        res.status(500).send(err)
      } else {
        res.status(200).send("Lesson deleted");
      }
    })
  }

}


