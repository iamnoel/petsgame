const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling GET requests to /pets',
  });
});

router.post('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling POST requests to /pets',
  });
});

router.get('/:petID', (req, res, next) => {
  const id = req.params.petID;

  if (id == '0012') {
    res.status(200).json({
      message: `The unique pet ID ${id} was found!`,
      id: id,
    });
  } else {
    res.status(200).json({
      message: `You entered id ${id}`,
      id: id,
    });
  }
});

module.exports = router;
