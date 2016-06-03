var express = require("express");
var app = express();
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var heroRoute = require('./routes/heroRoute');
var superPowerRoute = require('./routes/superPowerRoute');

// Serve back static files
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use('/superPowerRoute', superPowerRoute);
app.use('/heroRoute', heroRoute);
app.use('/', index);

// Mongoose
var databaseURI = 'mongodb://localhost:27017/mu';
mongoose.connect(databaseURI);

mongoose.connection.on('connected', function () {
  console.log('Mongoose connection open ', databaseURI);
});

mongoose.connection.on('error', function (err) {
  console.log('Mongoose error connecting ', err);
  res.sendStatus(500);
});

app.set('port', process.env.PORT || 4242);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});
