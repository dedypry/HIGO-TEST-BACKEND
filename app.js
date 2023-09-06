require('./app/models/mongo')
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const { getFullPath } = require('./app/utils/router')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
// enable cors pre-flight
app.options('*', cors());
// somehow cors failed #Testing only
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const traverseDir = getFullPath(__dirname + '/routes/');
traverseDir.map((fullPath) => {
  app.use('/', require(fullPath));
});



// error handler
// error handler
app.use(function (err, req, res, next) {
  if (typeof err.handle === 'function') {
    err.handle();
  }

  if (err.message === undefined) {
    console.error(err);
  }
  console.error(err);
  // render the error page
  res.status(err.status || err.code || 500).json({
    message: err.msg || 'Something went wrong!',
  });
});

module.exports = app;
