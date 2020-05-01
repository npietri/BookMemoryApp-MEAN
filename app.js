var createError = require('http-errors');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var Book = require('./models/book');
var apiRouter = require('./routes/book');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist/BookMemoryApp-MEAN')));
app.use('/', express.static(path.join(__dirname, 'dist/BookMemoryApp-MEAN')));
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
//mongoDB COnnection
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/BookSchema', {
  promiseLibrary: require('bluebird'),
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(() => console.log('connection Mango successful'))
  .catch((err) => console.error(err));



app.post('/api/stuff', (req, res, next) => {
  const book = new Book({
    // isbn: req.body.isbn,
    // title: req.body.title,
    // author: req.body.author,
    // description: req.body.description,
    // published_year: req.body.published_year,
    // imageUrl: req.body.imageUrl,
    // publisher: req.body.publisher,
    // userId: req.body.userId,
    // updated_date: req.body.updated_date,
  });
  thing.save().then(
    () => {
      res.status(201).json({
        message: 'Post saved successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
});

module.exports = app;
