const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.locals.title = 'Board Games & Locations'

mockData = { team: 'Lakers', number: 24, rank: 'BEST' }
app.locals.notes = mockData

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.get('/api/v1/games', (request, response) => {
  database('board_games').select()
    .then((games) => {
      response.status(200).json(games);
    })
    .catch((error) => {
      response.status(404).json({ error });
    });
});

app.get('/api/v1/test', (request, response) => {
  response.status(200).json(app.locals.notes)
})


module.exports = app;