const express = require('express');
const Book = require('../models/Book');

const router = express.Router();

/* Delete a book from the database */
router.delete('/:Id', async (request, response) => {
    try {
      const removedBook = await Book.remove({ _id: request.params.Id });
      response.json(removedBook);
    } catch (error) {
      response.json({ message: error });
    }
  });

  module.exports = router;