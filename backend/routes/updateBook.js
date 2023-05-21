const express = require("express");
const Book = require("../models/Book");

const router = express.Router();

/* Update an existing book in the database */
router.patch("/:Id", async (request, response) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(
      request.params.Id,
      request.body
    );
    response.json(updatedBook);
  } catch (error) {
    response.json({ message: error });
  }
});

module.exports = router;
