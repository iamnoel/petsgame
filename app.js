require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const petRoutes = require('./api/routes/pets');
const userRoutes = require('./api/routes/users');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Routes for request handling
app.use('/pets/', petRoutes);
app.use('/users/', userRoutes);

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

// app.use((req, res, next) => {
//   res.status(200).json({
//     message: 'Welcome to pets game',
//   });
// });

module.exports = app;
