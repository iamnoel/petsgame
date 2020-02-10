require('dotenv').config();
const express = require('express');
const app = express();

const petRoutes = require('./api/routes/pets');
const userRoutes = require('./api/routes/users');

app.use('/pets/', petRoutes);
app.use('/users/', userRoutes);

// app.use((req, res, next) => {
//   res.status(200).json({
//     message: 'Welcome to pets game',
//   });
// });

module.exports = app;
