require('dotenv').config();
const axios = require('axios'),
  massive = require('massive'),
  imagesJSON = require('../assets/images.json'),
  { CONNECTION_STRING } = process.env;

var userCount = 10;

massive(CONNECTION_STRING).then(function(db) {
  db.seed().then(function() {
    axios
      .get(`https://randomuser.me/api/?results=${userCount}`)
      .then(function(fakeUsers) {
        Promise.all(seedUsersTable(db, fakeUsers)).then(function(users) {
          Promise.all(seedFollowersTable(db, users)).then(function() {
            Promise.all(seedImagesTable(db, users)).then(function(derp) {
              console.log(derp);
            });
          });
        });
      });
  });
});

function seedImagesTable(db, users) {
  var promises = [];

  users.forEach(function(user) {
    var maxImages = Math.floor(Math.random() * 50),
      prevImage = [];

    while (maxImages > 0) {
      let imageIdx = Math.floor(Math.random() * maxImages);

      if (!prevImage.includes(imageIdx)) {
        promises.push(
          db.images.insert({
            userid: user.id,
            url: imagesJSON.hits[imageIdx].largeImageURL
          })
        );

        prevImage.push(imageIdx);
      }

      maxImages--;
    }
  });

  return promises;
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

      maxFollowers -= Math.floor((Math.random() * userCount) / 2);
    }
  });

  return promises;
}

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
