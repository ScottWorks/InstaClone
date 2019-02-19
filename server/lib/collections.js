const photos = [
  {
    id: 1,
    url:
      'https://pixabay.com/get/ea3cb8082af7013ed1584d05fb1d4797e676e0d71eb40c4090f5c17da1eebdbad0_1280.jpg',
    timestamp: 1548231010
  },
  {
    id: 2,
    url:
      'https://pixabay.com/get/ea3cb8072cf2053ed1584d05fb1d4797e676e0d71eb40c4090f5c17da1eebdbad0_1280.jpg',
    timestamp: 1544801303
  },
  {
    id: 3,
    url:
      'https://pixabay.com/get/ea3cb8072ef3033ed1584d05fb1d4797e676e0d71eb40c4090f5c17da1eebdbad0_1280.jpg',
    timestamp: 1548777264
  },
  {
    id: 4,
    url:
      'https://pixabay.com/get/ea3cb8092df5043ed1584d05fb1d4797e676e0d71eb40c4090f5c17da1eebdbad0_1280.jpg',
    timestamp: 1547286165
  },
  {
    id: 5,
    url:
      'https://pixabay.com/get/ea3cb80e28f4023ed1584d05fb1d4797e676e0d71eb40c4090f5c17da1eebdbad0_1280.jpg',
    timestamp: 1548869734
  },
  {
    id: 6,
    url:
      'https://pixabay.com/get/ea3cb80a28f3093ed1584d05fb1d4797e676e0d71eb40c4090f5c17da1eebdbad0_1280.jpg',
    timestamp: 1545764822
  },
  {
    id: 7,
    url:
      'https://pixabay.com/get/ea3cb80a2af5033ed1584d05fb1d4797e676e0d71eb40c4090f5c17da1eebdbad0_1280.jpg',
    timestamp: 1549097585
  },
  {
    id: 8,
    url:
      'https://pixabay.com/get/ea3cb80829fd053ed1584d05fb1d4797e676e0d71eb40c4090f5c17da1eebdbad0_1280.jpg',
    timestamp: 1548080244
  },
  {
    id: 9,
    url:
      'https://pixabay.com/get/ea3cb80921f3013ed1584d05fb1d4797e676e0d71eb40c4090f5c17da1eebdbad0_1280.jpg',
    timestamp: 1547605861
  },
  {
    id: 10,
    url:
      'https://pixabay.com/get/ea3cb80920f0093ed1584d05fb1d4797e676e0d71eb40c4090f5c17da1eebdbad0_1280.jpg',
    timestamp: 1547569113
  },
  {
    id: 11,
    url:
      'https://pixabay.com/get/ea3cb90921f5043ed1584d05fb1d4797e676e0d71eb40c4090f5c17da1eebdbad0_1280.jpg',
    timestamp: 1550351160
  },
  {
    id: 12,
    url:
      'https://pixabay.com/get/ea3cb80829fd023ed1584d05fb1d4797e676e0d71eb40c4090f5c17da1eebdbad0_1280.jpg',
    timestamp: 1549623667
  },
  {
    id: 13,
    url:
      'https://pixabay.com/get/ea3cb80921f3043ed1584d05fb1d4797e676e0d71eb40c4090f5c17da1eebdbad0_1280.jpg',
    timestamp: 1549478879
  },
  {
    id: 14,
    url:
      'https://pixabay.com/get/ea3cb90921f6013ed1584d05fb1d4797e676e0d71eb40c4090f5c17da1eebdbad0_1280.jpg',
    timestamp: 1545332659
  },
  {
    id: 15,
    url:
      'https://pixabay.com/get/ea3cb8062cf6093ed1584d05fb1d4797e676e0d71eb40c4090f5c17da1eebdbad0_1280.jpg',
    timestamp: 1548244611
  },
  {
    id: 16,
    url:
      'https://pixabay.com/get/ea3cb80f2efc013ed1584d05fb1d4797e676e0d71eb40c4090f5c17da1eebdbad0_1280.jpg',
    timestamp: 1549508130
  },
  {
    id: 17,
    url:
      'https://pixabay.com/get/ea3cb80f2af6093ed1584d05fb1d4797e676e0d71eb40c4090f5c17da1eebdbad0_1280.jpg',
    timestamp: 1547870831
  },
  {
    id: 18,
    url:
      'https://pixabay.com/get/ea3cb80b2df3073ed1584d05fb1d4797e676e0d71eb40c4090f5c17da1eebdbad0_1280.jpg',
    timestamp: 1546488519
  },
  {
    id: 19,
    url:
      'https://pixabay.com/get/ea3cb90b2ffc043ed1584d05fb1d4797e676e0d71eb40c4090f5c17da1eebdbad0_1280.jpg',
    timestamp: 1548993398
  },
  {
    id: 20,
    url:
      'https://pixabay.com/get/ea3cb80a2efd043ed1584d05fb1d4797e676e0d71eb40c4090f5c17da1eebdbad0_1280.jpg',
    timestamp: 1549253388
  }
];

module.exports = {
  getUsers: function(req, res) {
    const db = req.app.get('db');

    db.getUsers().then(function(users) {
      if (users.length > 0) {
        res.status(200).send(users);
      } else {
        res.sendStatus(500);
      }
    });
  },
  getImages: function(req, res) {
    res.status(200).send(photos);
  }
};
