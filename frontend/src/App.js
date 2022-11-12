import { useState, useEffect } from 'react';
import axios from 'axios';

import BookList from './components/BookList';
import Header from './components/Header';
import AddNew from './components/AddNew';

const App = () => {
  const [books, setBooks] = useState([]);

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
      console.log(error);
    }
  }

  /*Get single book data from the server*/
  async function fetchBook(_id) {
    try {
      const response = await axios.get(`http://localhost:5000/books/${_id}`);
  
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

   /*Add new book to the list*/
   async function addNew(book) {
    try {
    const response = await axios.post("http://localhost:5000/books",
    {
      title: book.title,
      author: book.author,
      description: book.description
    })

    setBooks([...books, book]);
    
    return response.data;

   } catch (error) {
    console.log(error);
   }
  }

  /*Update existing book in the server*/
  async function updateExisting(_id) {
    try {
   const response = await axios.put(`http://localhost:5000/books/${_id}`, 
   {
      title: _id.book.title,
      author: _id.book.author,
      description: _id.book.description
    })

    setBooks(books.filter((book) => book._id === _id), [...books, _id.book]);
    
    console.log('Updated' + _id);
    return response.data;
  }catch(error){
  console.log(error);
    }
} 

  /*Delete a book from the server*/
  async function deleteBook(_id) {
    await axios.delete(`http://localhost:5000/books/${_id}`, {
      method: 'DELETE',
    })

    console.log('Deleted', _id);

    setBooks(books.filter((book) => book._id !== _id));
  }


  /*Show detailed descreption of the selected book*/
  async function toggleBook(_id) {
    try{
    const bookToToggle = await fetchBook(_id)
    const fetchedBook = {...bookToToggle}

    const response = await axios.get(`http://localhost:5000/books/${_id}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(fetchedBook)
    })
    console.log(response.data);
    return response.data;

  } catch(error) {
    console.log(error);
  }

    setBooks(books.map((book) => book._id === _id));
  }

  return (
    <>
    <div className='header-container'>
      <Header/>
    </div>
    <div className='app-container'>
      <AddNew onNew={addNew} />
      <BookList books={books} onToggle={toggleBook} onDelete={deleteBook} onUpdate={updateExisting}/>
    </div>
    </>
  )
}

export default App;
