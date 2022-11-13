import { useState, useEffect } from 'react';
import axios from 'axios';

import BookList from './components/BookList';
import Header from './components/Header';
import AddNew from './components/AddNew';

const App = () => {
  const [books, setBooks] = useState([]);
  const [showBook, setShowBook] = useState(false);

  /*Get all the book data from server*/
  useEffect(() => {
    const getBooks = async () => {
      const booksFromServer = await fetchBooks()
      setBooks(booksFromServer);
    }
    getBooks();
  }, []);

  /*Get all book data from the server*/
  async function fetchBooks() {
    try {
      const response = await axios.get("http://localhost:5000/books");
  
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  }

  /*Get single book data from the server*/
  async function fetchBook(_id) {
    try {
      const response = await axios.get(`http://localhost:5000/books/${_id}`);
  
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  }

   /*Add new book to the list*/
   async function addNew(book) {
    const newBook = { title: book.title, author: book.author, description: book.description}
    try {
    const response = await axios.post("http://localhost:5000/books", newBook)

    setBooks([...books, book]);
    
    return response.data;
   } catch (error) {
    console.log(error.message);
   }
  }

  /*Update existing book in the server*/
  async function updateExisting(_id, title, author, description) {
    const book = await fetchBook(_id)
    const updatedBook = {...book, title: title, author: author, description: description};
    try {
      const response = await axios.patch(`http://localhost:5000/books/${_id}`, updatedBook);

    setBooks(books.map((book) => book._id === _id ? {...book, title: title, author: author, description: description} : book));
    
    return response.data;
  }catch(error){
    console.log(error.message);
  }
}

  /*Delete a book from the server*/
  async function deleteBook(_id) {
    try{
    const response = await axios.delete(`http://localhost:5000/books/${_id}`);

    alert('Book has been now deleted');
    setBooks(books.filter((book) => book._id !== _id));

    return response.data;
    }catch(error){
      console.log(error.message);
    }
  }

  return (
    <>
    <div className='header-container'>
      <Header/>
    </div>
    <div className='app-container'>
      <AddNew onNew={addNew} />
      <BookList books={books} onDelete={deleteBook} onUpdate={updateExisting}/>
    </div>
    </>
  )
}

export default App;
