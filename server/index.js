require('dotenv').config();

const express = require('express'),
  bodyParser = require('body-parser'),
  massive = require('massive'),
  documents = require('./lib/documents'),
  collections = require('./lib/collections');

const app = express(),
  { CONNECTION_STRING, PORT } = process.env;

app.use(bodyParser.json());

// ##### SESSIONS #####

// ##### DOCUMENT ENDPOINTS #####
app.get('/api/users/:username', documents.getUser);
// app.get('/api/:users/:image', documents.getImage);

// ##### COLLECTION ENDPOINTS #####
app.get('/api/users', collections.getUsers);
app.get('/api/:user/images', collections.getImages);

// ##### CONTROLLER ENDPOINTS #####

massive(CONNECTION_STRING)
  .then(function(dbInstance) {
    app.set('db', dbInstance);
    app.listen(PORT, function() {
      console.log(`Listening on Port: ${PORT}`);
    });
  })
  .catch(function(err) {
    console.error(err);
  });
