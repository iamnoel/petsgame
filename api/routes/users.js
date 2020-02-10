const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Users were fetched',
  });
});

router.post('/', (req, res, next) => {
  req.status(201).json({
    message: 'User was created',
  });
});

router.get('/:userID', (req, res, next) => {
  res.status(200).json({
    message: 'User details',
    userID: req.params.userID,
  });
});

router.delete('/:userID', (req, res, next) => {
  res.status(200).json({
    message: 'User deleted',
    userID: req.params.userID,
  });
});

module.exports = router;
