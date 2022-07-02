const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
// const logger = require('morgan');
const layout=require('express-ejs-layouts');

const showListBookRouter = require('./routes/Book');
const addBookRouter = require('./routes/Book/create');
const deleteBookRouter = require('./routes/Book/delete');
const detailBookRouter = require('./routes/Book/detail');
const paginationBookRouter = require('./routes/Book/pagination');
const port=8087;
const app = express();

// view engine setup
app.use(layout);
app.set('layout', 'layout/layout.ejs');
app.set('view engine', 'ejs');

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




app.use('/', showListBookRouter);
app.use('/', addBookRouter);
app.use('/', deleteBookRouter);
app.use('/', detailBookRouter);
app.use('/',paginationBookRouter)




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.listen(port,()=>{
  console.log("http://localhost:"+port)})

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;
