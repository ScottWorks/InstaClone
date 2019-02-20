DROP TABLE IF EXISTS followers;
DROP TABLE IF EXISTS image_likes;
DROP TABLE IF EXISTS comment_likes;
DROP TABLE IF EXISTS image_comments;
DROP TABLE IF EXISTS images;
DROP TABLE IF EXISTS users;

CREATE TABLE users 
(
  id SERIAL PRIMARY KEY,
  profile_image_url TEXT NOT NULL,
  username TEXT NOT NULL,
  email TEXT NOT NULL,
  password TEXT NOT NULL,
  salt TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  last_login_timestamp INTEGER NOT NULL,
  follower_count INTEGER NOT NULL,
  following_count INTEGER NOT NULL,
  post_count INTEGER NOT NULL
);

CREATE TABLE followers 
(
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  follower_id INTEGER NOT NULL
);

CREATE TABLE images 
(
  id SERIAL PRIMARY KEY,
  url TEXT NOT NULL,
  timestamp INTEGER NOT NULL,
  like_count INTEGER NOT NULL,
  comment_count INTEGER NOT NULL,
  user_id INTEGER REFERENCES users(id)
);  

CREATE TABLE image_likes 
(
  id SERIAL PRIMARY KEY,
  timestamp INTEGER NOT NULL,
  user_id INTEGER REFERENCES users(id),
  image_id INTEGER REFERENCES images(id)
);  

CREATE TABLE image_comments 
(
  id SERIAL PRIMARY KEY,
  comment TEXT NOT NULL,
  timestamp INTEGER NOT NULL,
  user_id INTEGER REFERENCES users(id),
  image_id INTEGER REFERENCES images(id)
);  

CREATE TABLE comment_likes 
(
  id SERIAL PRIMARY KEY,
  timestamp INTEGER NOT NULL,
  user_id INTEGER REFERENCES users(id),
  image_comment_id INTEGER REFERENCES image_comments(id)
); 



-- /////////// GENERATE FAKE USERS \\\\\\\\\\\\\

-- INSERT INTO users
--  (profileImageUrl, username, email, password, salt, firstName, lastName)
-- VALUES
--  ('https://randomuser.me/api/portraits/men/70.jpg', 'silverzebra254', 'ryan.young@example.com', 'bigballs', 'jreLhvWR', 'ryan', 'young');

-- INSERT INTO users
--  (profileImageUrl, username, email, password, salt, firstName, lastName)
-- VALUES
--  ('https://randomuser.me/api/portraits/women/79.jpg', 'angrybird406', 'tracy.hopkins@example.com', 'oooooooo', 'jLLDejK5', 'tracy', 'hopkins');

-- INSERT INTO users
--  (profileImageUrl, username, email, password, salt, firstName, lastName)
-- VALUES
--  ('https://randomuser.me/api/portraits/women/57.jpg', 'greensnake791', 'katiane.daluz@example.com', 'wordup', 'HQvP0Hjy', 'katiane', 'da luz');

-- INSERT INTO users
--  (profileImageUrl, username, email, password, salt, firstName, lastName)
-- VALUES
--  ('https://randomuser.me/api/portraits/women/41.jpg', 'brownkoala859', 'édith.gaillard@example.com', 'rated', 'ztHr5Pha', 'édith', 'gaillard');

-- INSERT INTO users
--  (profileImageUrl, username, email, password, salt, firstName, lastName)
-- VALUES
--  ('https://randomuser.me/api/portraits/women/82.jpg', 'lazylion643', 'sofia.rhodes@example.com', 'balloons', 'yFE88aDk', 'sofia', 'rhodes');

-- INSERT INTO users
--  (profileImageUrl, username, email, password, salt, firstName, lastName)
-- VALUES
--  ('https://randomuser.me/api/portraits/women/11.jpg', 'blackmouse786', 'monica.williamson@example.com', 'coldplay', 'ZTilpGLy', 'monica', 'williamson');

-- INSERT INTO users
--  (profileImageUrl, username, email, password, salt, firstName, lastName)
-- VALUES
--  ('https://randomuser.me/api/portraits/men/38.jpg', 'orangepanda867', 'lauri.jarvi@example.com', 'midnight', 'rqM7Kcb1', 'lauri', 'jarvi');

-- INSERT INTO users
--  (profileImageUrl, username, email, password, salt, firstName, lastName)
-- VALUES
--  ('https://randomuser.me/api/portraits/women/63.jpg', 'greenzebra553', 'deborah.nguyen@example.com', 'lololo', 'feoznowM', 'deborah', 'nguyen');

-- INSERT INTO users
--  (profileImageUrl, username, email, password, salt, firstName, lastName)
-- VALUES
--  ('https://randomuser.me/api/portraits/women/75.jpg', 'organicelephant966', 'jennifer.bryant@example.com', 'whatever', 'rZHcNd49', 'jennifer', 'bryant');

-- INSERT INTO users
--  (profileImageUrl, username, email, password, salt, firstName, lastName)
-- VALUES
--  ('https://randomuser.me/api/portraits/men/51.jpg', 'whitewolf702', 'eino.raisanen@example.com', 'fruit', 'azZOzJAY', 'eino', 'raisanen');



--  -- /////////// GENERATE FOLLOWERS \\\\\\\\\\\\\

-- -- /////////// USER 1 \\\\\\\\\\\\\
-- INSERT INTO followers
--  (userId, followerId)
-- VALUES ((SELECT id FROM users WHERE id = 1), (SELECT id FROM users WHERE id = 2));

-- INSERT INTO followers
--  (userId, followerId)
-- VALUES ((SELECT id FROM users WHERE id = 1), (SELECT id FROM users WHERE id = 3));

-- INSERT INTO followers
--  (userId, followerId)
-- VALUES ((SELECT id FROM users WHERE id = 1), (SELECT id FROM users WHERE id = 4));

-- INSERT INTO followers
--  (userId, followerId)
-- VALUES ((SELECT id FROM users WHERE id = 1), (SELECT id FROM users WHERE id = 5));

-- INSERT INTO followers
--  (userId, followerId)
-- VALUES ((SELECT id FROM users WHERE id = 1), (SELECT id FROM users WHERE id = 6));

-- INSERT INTO followers
--  (userId, followerId)
-- VALUES ((SELECT id FROM users WHERE id = 1), (SELECT id FROM users WHERE id = 7));

-- -- /////////// USER 2 \\\\\\\\\\\\\
-- INSERT INTO followers
--  (userId, followerId)
-- VALUES ((SELECT id FROM users WHERE id = 2), (SELECT id FROM users WHERE id = 1));

-- INSERT INTO followers
--  (userId, followerId)
-- VALUES ((SELECT id FROM users WHERE id = 2), (SELECT id FROM users WHERE id = 3));

-- INSERT INTO followers
--  (userId, followerId)
-- VALUES ((SELECT id FROM users WHERE id = 2), (SELECT id FROM users WHERE id = 8));

-- INSERT INTO followers
--  (userId, followerId)
-- VALUES ((SELECT id FROM users WHERE id = 2), (SELECT id FROM users WHERE id = 9));

-- INSERT INTO followers
--  (userId, followerId)
-- VALUES ((SELECT id FROM users WHERE id = 2), (SELECT id FROM users WHERE id = 10));

-- -- /////////// USER 3 \\\\\\\\\\\\\
-- INSERT INTO followers
--  (userId, followerId)
-- VALUES ((SELECT id FROM users WHERE id = 3), (SELECT id FROM users WHERE id = 1));

-- INSERT INTO followers
--  (userId, followerId)
-- VALUES ((SELECT id FROM users WHERE id = 3), (SELECT id FROM users WHERE id = 4));

-- INSERT INTO followers
--  (userId, followerId)
-- VALUES ((SELECT id FROM users WHERE id = 3), (SELECT id FROM users WHERE id = 5));

-- INSERT INTO followers
--  (userId, followerId)
-- VALUES ((SELECT id FROM users WHERE id = 3), (SELECT id FROM users WHERE id = 10));

-- -- /////////// USER 4 \\\\\\\\\\\\\
-- INSERT INTO followers
--  (userId, followerId)
-- VALUES ((SELECT id FROM users WHERE id = 4), (SELECT id FROM users WHERE id = 2));

-- INSERT INTO followers
--  (userId, followerId)
-- VALUES ((SELECT id FROM users WHERE id = 4), (SELECT id FROM users WHERE id = 3));

-- INSERT INTO followers
--  (userId, followerId)
-- VALUES ((SELECT id FROM users WHERE id = 4), (SELECT id FROM users WHERE id = 5));

-- INSERT INTO followers
--  (userId, followerId)
-- VALUES ((SELECT id FROM users WHERE id = 4), (SELECT id FROM users WHERE id = 7));

-- -- /////////// USER 5 \\\\\\\\\\\\\
-- INSERT INTO followers
--  (userId, followerId)
-- VALUES ((SELECT id FROM users WHERE id = 5), (SELECT id FROM users WHERE id = 1));

-- INSERT INTO followers
--  (userId, followerId)
-- VALUES ((SELECT id FROM users WHERE id = 5), (SELECT id FROM users WHERE id = 2));

-- INSERT INTO followers
--  (userId, followerId)
-- VALUES ((SELECT id FROM users WHERE id = 5), (SELECT id FROM users WHERE id = 3));

-- -- /////////// USER 6 \\\\\\\\\\\\\
-- INSERT INTO followers
--  (userId, followerId)
-- VALUES ((SELECT id FROM users WHERE id = 6), (SELECT id FROM users WHERE id = 5));

-- INSERT INTO followers
--  (userId, followerId)
-- VALUES ((SELECT id FROM users WHERE id = 6), (SELECT id FROM users WHERE id = 7));

-- INSERT INTO followers
--  (userId, followerId)
-- VALUES ((SELECT id FROM users WHERE id = 6), (SELECT id FROM users WHERE id = 8));

-- -- /////////// USER 7 \\\\\\\\\\\\\
-- INSERT INTO followers
--  (userId, followerId)
-- VALUES ((SELECT id FROM users WHERE id = 7), (SELECT id FROM users WHERE id = 4));

-- INSERT INTO followers
--  (userId, followerId)
-- VALUES ((SELECT id FROM users WHERE id = 7), (SELECT id FROM users WHERE id = 5));

-- INSERT INTO followers
--  (userId, followerId)
-- VALUES ((SELECT id FROM users WHERE id = 7), (SELECT id FROM users WHERE id = 8));

-- -- /////////// USER 8 \\\\\\\\\\\\\
-- INSERT INTO followers
--  (userId, followerId)
-- VALUES ((SELECT id FROM users WHERE id = 8), (SELECT id FROM users WHERE id = 6));

-- INSERT INTO followers
--  (userId, followerId)
-- VALUES ((SELECT id FROM users WHERE id = 8), (SELECT id FROM users WHERE id = 7));

-- INSERT INTO followers
--  (userId, followerId)
-- VALUES ((SELECT id FROM users WHERE id = 8), (SELECT id FROM users WHERE id = 10));

-- -- /////////// USER 9 \\\\\\\\\\\\\
-- INSERT INTO followers
--  (userId, followerId)
-- VALUES ((SELECT id FROM users WHERE id = 9), (SELECT id FROM users WHERE id = 4));

-- INSERT INTO followers
--  (userId, followerId)
-- VALUES ((SELECT id FROM users WHERE id = 9), (SELECT id FROM users WHERE id = 5));

-- INSERT INTO followers
--  (userId, followerId)
-- VALUES ((SELECT id FROM users WHERE id = 9), (SELECT id FROM users WHERE id = 10));

-- -- /////////// USER 10 \\\\\\\\\\\\\
-- INSERT INTO followers
--  (userId, followerId)
-- VALUES ((SELECT id FROM users WHERE id = 10), (SELECT id FROM users WHERE id = 3));

-- INSERT INTO followers
--  (userId, followerId)
-- VALUES ((SELECT id FROM users WHERE id = 10), (SELECT id FROM users WHERE id = 7));

-- INSERT INTO followers
--  (userId, followerId)
-- VALUES ((SELECT id FROM users WHERE id = 10), (SELECT id FROM users WHERE id = 9));



-- ///////////  \\\\\\\\\\\\\
