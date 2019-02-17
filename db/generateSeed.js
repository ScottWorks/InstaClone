require('dotenv').config();
const axios = require('axios'),
  massive = require('massive'),
  // imagesJSON = require('../assets/images.json'),
  { CONNECTION_STRING } = process.env;

var userCount = 1000;

massive(CONNECTION_STRING).then(function(db) {
  db.seed().then(function() {
    axios
      .get(`https://randomuser.me/api/?results=${userCount}`)
      .then(function(fakeUsers) {
        Promise.all(seedUsersTable(db, fakeUsers));
      });
  });
});

function seedUsersTable(db, fakeUsers) {
  return fakeUsers.data.results.map(function(fakeUser) {
    return db.users.insert({
      profile_image_url: fakeUser.picture.large,
      username: fakeUser.login.username,
      email: fakeUser.email,
      password: fakeUser.login.password,
      salt: fakeUser.login.salt,
      first_name: capitalizeName(fakeUser.name.first),
      last_name: capitalizeName(fakeUser.name.last),
      last_login_timestamp: generateRandomNumber(1544431245, 1550430783),
      follower_count: generateRandomNumber(0, userCount),
      following_count: generateRandomNumber(0, userCount),
      post_count: generateRandomNumber(0, 100)
    });
  });
}

function capitalizeName(name) {
  return name.replace(/\b[a-z]/g, function(char) {
    return char.toUpperCase();
  });
}

function generateRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// massive(CONNECTION_STRING).then(function(db) {
//   db.seed().then(function() {
//     axios
//       .get(`https://randomuser.me/api/?results=${userCount}`)
//       .then(function(fakeUsers) {
//         Promise.all(seedUsersTable(db, fakeUsers)).then(function(users) {
//           Promise.all(seedFollowersTable(db, users)).then(function() {
//             Promise.all(seedImagesTable(db, users)).then(function() {
//               db.query('select * from images').then(function(images) {
//                 Promise.all(seedImageLikesTable(db, images)).then(function() {
//                   console.log(images);
//                 });
//               });
//             });
//           });
//         });
//       });
//   });
// });

// function seedImageLikesTable(db, images) {
//   var promises = [];

//   images.forEach(function(image, idx) {
//     let numberOfLikes,
//       numberOfImages = images.length,
//       randomUsers = [];

//     if (idx < numberOfImages * 0.05) {
//       numberOfLikes = Math.floor(Math.random() * numberOfImages) * 0.5;
//     } else if (idx > numberOfImages * 0.05 && idx <= numberOfImages * 0.6) {
//       numberOfLikes = Math.floor(Math.random() * numberOfImages) * 0.15;
//     } else if (idx > numberOfImages * 0.6 && idx <= numberOfImages * 0.85) {
//       numberOfLikes = Math.floor(Math.random() * numberOfImages) * 0.05;
//     } else if (idx > numberOfImages * 0.85) {
//       numberOfLikes = 0;
//     }

//     while (numberOfLikes > 0) {
//       let currentUser = Math.floor(Math.random() * userCount) + 1;

//       if (!randomUsers.includes(currentUser)) {
//         promises.push(
//           db.image_likes.insert({
//             user_id: currentUser,
//             image_id: image.id
//           })
//         );
//       }

//       randomUsers.push(currentUser);
//       numberOfLikes--;
//     }
//   });

//   return promises;
// }

// function seedImagesTable(db, users) {
//   var promises = [];

//   users.forEach(function(user) {
//     var imageMax = Math.floor(Math.random() * 50),
//       prevImage = [];

//     while (imageMax > 0) {
//       let imageIdx = Math.floor(Math.random() * 10);

//       if (!prevImage.includes(imageIdx)) {
//         promises.push(
//           db.images.insert({
//             user_id: user.id,
//             url: imagesJSON.hits[imageIdx].largeImageURL
//           })
//         );

//         prevImage.push(imageIdx);
//       }

//       imageMax--;
//     }
//   });

//   return promises;
// }

// function seedFollowersTable(db, users) {
//   var promises = [];

//   users.forEach(function(user) {
//     var maxFollowers = Math.floor(Math.random() * userCount),
//       prevUserId = [];

//     while (maxFollowers > 0) {
//       if (!prevUserId.includes(maxFollowers) && maxFollowers !== user.id) {
//         promises.push(
//           db.followers.insert({
//             user_id: user.id,
//             follower_id: maxFollowers
//           })
//         );

//         prevUserId.push(maxFollowers);
//       }

//       maxFollowers -= Math.floor((Math.random() * userCount) / 2);
//     }
//   });

//   return promises;
// }
