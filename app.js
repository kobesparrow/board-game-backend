const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);



module.exports = app;