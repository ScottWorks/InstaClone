const photos = [
  {
    id: 1,
    url:
      'https://pixabay.com/get/ea3cb8082af7013ed1584d05fb1d4797e676e0d71eb40c4090f5c17da1eebdbad0_1280.jpg',
    timestamp: 1546025505,
    likes: 789,
    comments: [
      { user_id: 1, comment: 'Cool!' },
      { user_id: 2, comment: 'Wow!' },
      { user_id: 3, comment: 'Splunk!' },
      { user_id: 4, comment: 'Derrrrrr!' }
    ]
  },
  {
    id: 2,
    url:
      'https://pixabay.com/get/ea3cb8072cf2053ed1584d05fb1d4797e676e0d71eb40c4090f5c17da1eebdbad0_1280.jpg',
    timestamp: 1544679875,
    likes: 394,
    comments: [
      { user_id: 1, comment: 'Cool!' },
      { user_id: 2, comment: 'Wow!' },
      { user_id: 3, comment: 'Splunk!' },
      { user_id: 4, comment: 'Derrrrrr!' }
    ]
  },
  {
    id: 3,
    url:
      'https://pixabay.com/get/ea3cb8072ef3033ed1584d05fb1d4797e676e0d71eb40c4090f5c17da1eebdbad0_1280.jpg',
    timestamp: 1549966911,
    likes: 416,
    comments: [
      { user_id: 1, comment: 'Cool!' },
      { user_id: 2, comment: 'Wow!' },
      { user_id: 3, comment: 'Splunk!' },
      { user_id: 4, comment: 'Derrrrrr!' }
    ]
  },
  {
    id: 4,
    url:
      'https://pixabay.com/get/ea3cb8092df5043ed1584d05fb1d4797e676e0d71eb40c4090f5c17da1eebdbad0_1280.jpg',
    timestamp: 1549457765,
    likes: 771,
    comments: [
      { user_id: 1, comment: 'Cool!' },
      { user_id: 2, comment: 'Wow!' },
      { user_id: 3, comment: 'Splunk!' },
      { user_id: 4, comment: 'Derrrrrr!' }
    ]
  },
  {
    id: 5,
    url:
      'https://pixabay.com/get/ea3cb80e28f4023ed1584d05fb1d4797e676e0d71eb40c4090f5c17da1eebdbad0_1280.jpg',
    timestamp: 1547027077,
    likes: 903,
    comments: [
      { user_id: 1, comment: 'Cool!' },
      { user_id: 2, comment: 'Wow!' },
      { user_id: 3, comment: 'Splunk!' },
      { user_id: 4, comment: 'Derrrrrr!' }
    ]
  },
  {
    id: 6,
    url:
      'https://pixabay.com/get/ea3cb80a28f3093ed1584d05fb1d4797e676e0d71eb40c4090f5c17da1eebdbad0_1280.jpg',
    timestamp: 1546845879,
    likes: 173,
    comments: [
      { user_id: 1, comment: 'Cool!' },
      { user_id: 2, comment: 'Wow!' },
      { user_id: 3, comment: 'Splunk!' },
      { user_id: 4, comment: 'Derrrrrr!' }
    ]
  },
  {
    id: 7,
    url:
      'https://pixabay.com/get/ea3cb80a2af5033ed1584d05fb1d4797e676e0d71eb40c4090f5c17da1eebdbad0_1280.jpg',
    timestamp: 1546643767,
    likes: 114,
    comments: [
      { user_id: 1, comment: 'Cool!' },
      { user_id: 2, comment: 'Wow!' },
      { user_id: 3, comment: 'Splunk!' },
      { user_id: 4, comment: 'Derrrrrr!' }
    ]
  },
  {
    id: 8,
    url:
      'https://pixabay.com/get/ea3cb80829fd053ed1584d05fb1d4797e676e0d71eb40c4090f5c17da1eebdbad0_1280.jpg',
    timestamp: 1546555499,
    likes: 57,
    comments: [
      { user_id: 1, comment: 'Cool!' },
      { user_id: 2, comment: 'Wow!' },
      { user_id: 3, comment: 'Splunk!' },
      { user_id: 4, comment: 'Derrrrrr!' }
    ]
  },
  {
    id: 9,
    url:
      'https://pixabay.com/get/ea3cb80921f3013ed1584d05fb1d4797e676e0d71eb40c4090f5c17da1eebdbad0_1280.jpg',
    timestamp: 1549089872,
    likes: 378,
    comments: [
      { user_id: 1, comment: 'Cool!' },
      { user_id: 2, comment: 'Wow!' },
      { user_id: 3, comment: 'Splunk!' },
      { user_id: 4, comment: 'Derrrrrr!' }
    ]
  },
  {
    id: 10,
    url:
      'https://pixabay.com/get/ea3cb80920f0093ed1584d05fb1d4797e676e0d71eb40c4090f5c17da1eebdbad0_1280.jpg',
    timestamp: 1549379667,
    likes: 649,
    comments: [
      { user_id: 1, comment: 'Cool!' },
      { user_id: 2, comment: 'Wow!' },
      { user_id: 3, comment: 'Splunk!' },
      { user_id: 4, comment: 'Derrrrrr!' }
    ]
  },
  {
    id: 11,
    url:
      'https://pixabay.com/get/ea3cb90921f5043ed1584d05fb1d4797e676e0d71eb40c4090f5c17da1eebdbad0_1280.jpg',
    timestamp: 1544438127,
    likes: 901,
    comments: [
      { user_id: 1, comment: 'Cool!' },
      { user_id: 2, comment: 'Wow!' },
      { user_id: 3, comment: 'Splunk!' },
      { user_id: 4, comment: 'Derrrrrr!' }
    ]
  },
  {
    id: 12,
    url:
      'https://pixabay.com/get/ea3cb80829fd023ed1584d05fb1d4797e676e0d71eb40c4090f5c17da1eebdbad0_1280.jpg',
    timestamp: 1549519820,
    likes: 443,
    comments: [
      { user_id: 1, comment: 'Cool!' },
      { user_id: 2, comment: 'Wow!' },
      { user_id: 3, comment: 'Splunk!' },
      { user_id: 4, comment: 'Derrrrrr!' }
    ]
  },
  {
    id: 13,
    url:
      'https://pixabay.com/get/ea3cb80921f3043ed1584d05fb1d4797e676e0d71eb40c4090f5c17da1eebdbad0_1280.jpg',
    timestamp: 1546626654,
    likes: 387,
    comments: [
      { user_id: 1, comment: 'Cool!' },
      { user_id: 2, comment: 'Wow!' },
      { user_id: 3, comment: 'Splunk!' },
      { user_id: 4, comment: 'Derrrrrr!' }
    ]
  },
  {
    id: 14,
    url:
      'https://pixabay.com/get/ea3cb90921f6013ed1584d05fb1d4797e676e0d71eb40c4090f5c17da1eebdbad0_1280.jpg',
    timestamp: 1549659834,
    likes: 210,
    comments: [
      { user_id: 1, comment: 'Cool!' },
      { user_id: 2, comment: 'Wow!' },
      { user_id: 3, comment: 'Splunk!' },
      { user_id: 4, comment: 'Derrrrrr!' }
    ]
  },
  {
    id: 15,
    url:
      'https://pixabay.com/get/ea3cb8062cf6093ed1584d05fb1d4797e676e0d71eb40c4090f5c17da1eebdbad0_1280.jpg',
    timestamp: 1544836600,
    likes: 284,
    comments: [
      { user_id: 1, comment: 'Cool!' },
      { user_id: 2, comment: 'Wow!' },
      { user_id: 3, comment: 'Splunk!' },
      { user_id: 4, comment: 'Derrrrrr!' }
    ]
  },
  {
    id: 16,
    url:
      'https://pixabay.com/get/ea3cb80f2efc013ed1584d05fb1d4797e676e0d71eb40c4090f5c17da1eebdbad0_1280.jpg',
    timestamp: 1545634644,
    likes: 144,
    comments: [
      { user_id: 1, comment: 'Cool!' },
      { user_id: 2, comment: 'Wow!' },
      { user_id: 3, comment: 'Splunk!' },
      { user_id: 4, comment: 'Derrrrrr!' }
    ]
  },
  {
    id: 17,
    url:
      'https://pixabay.com/get/ea3cb80f2af6093ed1584d05fb1d4797e676e0d71eb40c4090f5c17da1eebdbad0_1280.jpg',
    timestamp: 1545603768,
    likes: 73,
    comments: [
      { user_id: 1, comment: 'Cool!' },
      { user_id: 2, comment: 'Wow!' },
      { user_id: 3, comment: 'Splunk!' },
      { user_id: 4, comment: 'Derrrrrr!' }
    ]
  },
  {
    id: 18,
    url:
      'https://pixabay.com/get/ea3cb80b2df3073ed1584d05fb1d4797e676e0d71eb40c4090f5c17da1eebdbad0_1280.jpg',
    timestamp: 1545817503,
    likes: 845,
    comments: [
      { user_id: 1, comment: 'Cool!' },
      { user_id: 2, comment: 'Wow!' },
      { user_id: 3, comment: 'Splunk!' },
      { user_id: 4, comment: 'Derrrrrr!' }
    ]
  },
  {
    id: 19,
    url:
      'https://pixabay.com/get/ea3cb90b2ffc043ed1584d05fb1d4797e676e0d71eb40c4090f5c17da1eebdbad0_1280.jpg',
    timestamp: 1550239773,
    likes: 596,
    comments: [
      { user_id: 1, comment: 'Cool!' },
      { user_id: 2, comment: 'Wow!' },
      { user_id: 3, comment: 'Splunk!' },
      { user_id: 4, comment: 'Derrrrrr!' }
    ]
  },
  {
    id: 20,
    url:
      'https://pixabay.com/get/ea3cb80a2efd043ed1584d05fb1d4797e676e0d71eb40c4090f5c17da1eebdbad0_1280.jpg',
    timestamp: 1545999189,
    likes: 431,
    comments: [
      { user_id: 1, comment: 'Cool!' },
      { user_id: 2, comment: 'Wow!' },
      { user_id: 3, comment: 'Splunk!' },
      { user_id: 4, comment: 'Derrrrrr!' }
    ]
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
