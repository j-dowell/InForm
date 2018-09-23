const express = require('express');
const app = express();

const ENV = process.env.ENV || "development";

const knexConfig = require('./knexfile');
const knexLogger = require('knex-logger');
const knex = require('knex')(knexConfig[ENV]);

// Database helper functions
const dbHelpers = require('./helper_functions/db.js')

app.use(knexLogger(knex));

// Api endpoint that returns a list of users
app.get('/api/getUsers', (req,res) => {
  dbHelpers.getUsers().then(function(result) {
    res.json(result);
    console.log('Sent list of Employees');
  });
});

// Api endpoint that returns a list of jobs
app.get('/api/getJobs', (req,res) => {
  dbHelpers.getJobs().then(function(result) {
    res.json(result);
    console.log('Sent list of Jobs');
  });
});

const port = process.env.PORT || 3005;
app.listen(port);

console.log('App is listening on port ' + port);