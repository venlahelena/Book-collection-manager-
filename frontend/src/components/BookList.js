import { useState } from 'react'
import Book from './Book'

const BookList = ({books, onDelete, onUpdate}) => {
  const [showBook, setShowBook] = useState(false);

  return (
    <>
    <h2 className='h2' style={{marginTop: '2rem'}}>Book List</h2>
        {
        books.map((book) => (
          <Book key={book._id} book={book} onShow={() => setShowBook(!showBook)} showBook={showBook} onDelete={onDelete} onUpdate={onUpdate}/>
        ))
        }
    </>
  )
}

export default BookList
