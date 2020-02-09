const express = require('express');
const app = express();

const petRoutes = require('./api/routes/pets');

app.use('/pets/', petRoutes);

// app.use((req, res, next) => {
//   res.status(200).json({
//     message: 'Welcome to pets game',
//   });
// });

module.exports = app;
