require('dotenv').config();

require('dotenv').config();

const axios = require('axios');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Application listening on port ${port}`);
});

app.get('/', (req, res) => res.send('Hello pets!'));

app.get('/test/', (req, res) => {
  res.send(`The application is currently running on port ${port}!`);
});
