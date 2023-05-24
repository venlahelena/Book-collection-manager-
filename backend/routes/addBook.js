const express = require("express");
const Book = require("../models/Book");

const router = express.Router();

/* Add a new book to the database */
router.post("/", async (request, response) => {
  try {
    const newBook = new Book(request.body);
    const savedBook = await newBook.save();
    response.json(savedBook);
  } catch (error) {
    response.json({ message: error });
  }
});

module.exports = router;