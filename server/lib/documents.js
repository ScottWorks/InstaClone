module.exports = {
  getUser: function(req, res) {
    const db = req.app.get('db'),
      { username } = req.params;

    console.log(req.params);

    db.getUser([username]).then(function(userData) {
      if (userData.length > 0) {
        console.log(userData);
        res.status(200).send(userData);
      } else {
        res.sendStatus(404);
      }
    });
  }
  // getImage: function(req, res) {
  //   const db = req.app.get('db'),
  //     { user, image } = req.params;

  //   db.getImage([user, image])
  //     .then(function(image) {
  //       res.status(200).send(userData);
  //     })
  //     .catch(function() {
  //       res.sendStatus(404);
  //     });
  // }
};
