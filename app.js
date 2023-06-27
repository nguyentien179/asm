var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var url = "mongodb+srv://nguyentien100333:Khongduocnoi1@cluster0.xnfyjmy.mongodb.net/asm";
mongoose.connect(url)
.then(() => console.log ("Connect to DB succeed !"))
.catch((err) => console.log (err));

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var figureRouter = require('./routes/figure');
var posterRouter = require('./routes/poster');
var legoRouter = require('./routes/lego');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/figure', figureRouter);
app.use('/poster', posterRouter);
app.use('/lego', legoRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


var port = process.env.PORT || 3001;
app.listen(port);
module.exports = app;
