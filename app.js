const express = require('express');
const bodyParser = require('body-parser');

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
const port = process.env.PORT || 80;

const app = express(),
path = require('path'),
publicDir = path.join(__dirname,'public');
app.use(express.static(publicDir))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

app.listen(port);
module.exports = app;
