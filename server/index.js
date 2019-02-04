require('dotenv').config();

const express = require('express'),
  bodyParser = require('body-parser'),
  massive = require('massive'),
  app = express(),
  { CONNECTION_STRING, PORT } = process.env;

app.use(bodyParser.json());

// ##### SESSIONS #####

// ##### ENDPOINTS #####

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
