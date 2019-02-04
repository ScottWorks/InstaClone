CREATE TABLE user (
  id SERIAL PRIMARY KEY NOT NULL,
  profileImageUrl TEXT NOT NULL,
  username TEXT NOT NULL,
  email TEXT NOT NULL,
  password TEXT NOT NULL,
  salt TEXT NOT NULL,
  firstName TEXT NOT NULL,
  lastName TEXT NOT NULL
)

CREATE TABLE following (
  id SERIAL PRIMARY KEY NOT NULL,
  userId INTEGER REFERENCES user(id)
)  

CREATE TABLE follower (
  id SERIAL PRIMARY KEY NOT NULL,
  userId INTEGER REFERENCES user(id)
)  

CREATE TABLE image (
  id SERIAL PRIMARY KEY NOT NULL,
  userId INTEGER REFERENCES user(id),
  url TEXT
)  

CREATE TABLE imageLike (
  id SERIAL PRIMARY KEY NOT NULL,
  userId INTEGER REFERENCES user(id),
  imageId INTEGER REFERENCES image(id)
)  

CREATE TABLE imageComment (
  id SERIAL PRIMARY KEY NOT NULL,
  userId INTEGER REFERENCES user(id),
  imageId INTEGER REFERENCES image(id)
  comment TEXT
)  

CREATE TABLE commentLike (
  id SERIAL PRIMARY KEY NOT NULL,
  userId INTEGER REFERENCES user(id),
  imageCommentId INTEGER REFERENCES imageComment(id)
)  