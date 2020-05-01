// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
// var Book = require('./models/book');
// var apiRouter = require('./routes/book');

// var app = express();

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'dist/BookMemoryApp-MEAN')));
// app.use('/', express.static(path.join(__dirname, 'dist/BookMemoryApp-MEAN')));
// app.use('/api', apiRouter);

// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.send(err.status);
// });
// //mongoDB COnnection
// // var mongoose = require('mongoose');
// // mongoose.connect('mongodb://localhost:27017/Book', {
// //   promiseLibrary: require('bluebird'),
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// //   useCreateIndex: true
// // }).then(() => console.log('connection Mango successful'))
// //   .catch((err) => console.error(err));

// /////////////////////
// const MongoClient = require("mongodb").MongoClient;
// const assert = require("assert");

// // Connection URL
// const url = "mongodb://localhost:27017";

// // Database Name
// const dbName = "Book";

// // Create a new MongoClient
// const client = new MongoClient(url, {
//   useNewUrlParser: true
// });

// var db;

// // Use connect method to connect to the Server
// client.connect(function (err) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");

//   db = client.db(dbName);

//   xmlPromise
//     .then(val => {
//       return insertDocumentsPromise(db, val);
//     })
//     .then(res => {
//       debugger;
//       console.log(res);
//     });

//   //client.close();
// });

// ///////////////



// module.exports = app;
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');

var apiRouter = require('./routes/book');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist/Book')));
app.use('/', express.static(path.join(__dirname, 'dist/Book')));
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err.status);
});

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Book', { promiseLibrary: require('bluebird') })
  .then(() => console.log('connection successful'))
  .catch((err) => console.error(err));

module.exports = app;
