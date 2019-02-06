module.exports = {
  getUser: function(req, res) {
    const db = req.app.get('db'),
      { user } = req.params;

    db.getUser([user])
      .then(function(userData) {
        res.status(200).send(userData);
      })
      .catch(function() {
        res.sendStatus(404);
      });
  },
  getImage: function(req, res) {
    const db = req.app.get('db'),
      { user, image } = req.params;

    db.getImage([user, image])
      .then(function(image) {
        res.status(200).send(userData);
      })
      .catch(function() {
        res.sendStatus(404);
      });
  }
};
