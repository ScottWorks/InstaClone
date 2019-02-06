require('dotenv').config();
const axios = require('axios'),
  massive = require('massive'),
  { CONNECTION_STRING } = process.env;

var userCount = 20;

massive(CONNECTION_STRING).then(function(db) {
  db.seed().then(function() {
    axios
      .get(`https://randomuser.me/api/?results=${userCount}`)
      .then(function(fakeUsers) {
        Promise.all(seedUsersTable(db, fakeUsers)).then(function(users) {
          Promise.all(seedFollowersTable(db, users)).then(function(derp) {
            console.log(derp);
          });
        });
      });
  });
});

function seedUsersTable(db, fakeUsers) {
  return fakeUsers.data.results.map(function(fakeUser) {
    return db.users.insert({
      profileimageurl: fakeUser.picture.large,
      username: fakeUser.login.username,
      email: fakeUser.email,
      password: fakeUser.login.password,
      salt: fakeUser.login.salt,
      firstname: fakeUser.name.first,
      lastname: fakeUser.name.last
    });
  });
}

function seedFollowersTable(db, users) {
  var promises = [];

  users.forEach(function(user) {
    var maxFollowers = Math.floor(Math.random() * userCount),
      prevUserId = [];

    while (maxFollowers > 0) {
      if (!prevUserId.includes(maxFollowers) && maxFollowers !== user.id) {
        promises.push(
          db.followers.insert({
            userid: user.id,
            followerid: maxFollowers
          })
        );

        prevUserId.push(maxFollowers);
      }

      maxFollowers -= Math.floor(Math.random() * userCount * 0.1);
    }
  });

  return promises;
}
