require('dotenv').config();

const express = require('express'),
  bodyParser = require('body-parser'),
  massive = require('massive'),
  documents = require('./lib/documents');

const app = express(),
  { CONNECTION_STRING, PORT } = process.env;

app.use(bodyParser.json());

// ##### SESSIONS #####

// ##### DOCUMENT ENDPOINTS #####
app.get('/api/:user', documents.getUser);
app.get('/api/:users/:image', documents.getImage);

// ##### COLLECTION ENDPOINTS #####
app.get('/api/users');
app.get('/api/:user/images');

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
