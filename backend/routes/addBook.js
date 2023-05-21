const express = require('express');
const Book = require('../models/Book');

const router = express.Router();

/* Add a new book to the database */
router.get('/', async (request, response) => {
  try {
    const books = await Book.find();
    response.json(books);
  } catch (error) {
    response.json({ message: error });
  }
});

module.exports = router;