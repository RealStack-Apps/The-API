const express = require('express');
const bodyParser = require('body-parser');

// Configuring database modules
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// configure server
const port = process.env.PORT || 80;

const app = express(),
path = require('path'),
publicDir = path.join(__dirname,'public');
app.use(express.static(publicDir))

// configure middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

// require the notes route 
require('./app/routes/note.routes.js')(app);

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});


app.listen(port);
module.exports = app;













