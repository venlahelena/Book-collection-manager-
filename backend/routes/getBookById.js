const express = require('express');
const Book = require('../models/Book');

const router = express.Router();

/* Get a single book from the database */
router.get('/:Id', async (request, response) => {
  try {
    const book = await Book.findById(request.params.Id);
    response.json(book);
  } catch (error) {
    response.json({ message: error });
  }
});

module.exports = router;