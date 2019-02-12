module.exports = {
  getUsers: function(req, res) {
    const db = req.app.get('db');

    db.getUsers().then(function(users) {
      if (users.length > 0) {
        res.status(200).send(users);
      } else {
        res.sendStatus(404);
      }
    });
  }
};
