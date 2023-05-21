const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

/* Middleware */
app.use(bodyParser.json());
app.use(cors());

/* Importing routes */
const bookRoutes = require('./routes/bookRoutes');
const getBookById = require('./routes/getBookById');
const addBook = require('./routes/addBook');
const deleteBook = require('./routes/deleteBook');
const updateBook = require('./routes/updateBook');

app.use('/books', bookRoutes);
app.use('/books', getBookById);
app.use('/books', addBook);
app.use('/books', deleteBook);
app.use('/books', updateBook);

/* Routes */
app.get('/', (request, response) => {
  response.send('Home page');
});

/* Connect to MongoDB database */
connectDB();

/* Server that application is listening */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
