import UpdateExisting from "./UpdateExisting";
import Details from "./Details";

const Book = ({ book, showBook, onShow, onDelete, onUpdate}) => {
  return (
    <>
    <div className="collection-container">
    <div className='book'>
      <h3 className='book-h3'> {book.title} </h3>
      <h4 className='book-h4'> Author: {book.author} </h4>
    </div>
    <div className="collection-buttons-container">
      <Details onShow={onShow} text={showBook ? 'Close details' : 'Details'} />
      <h4 className="book-h5" style={{color: 'red'}} onClick={() => onDelete(book._id)}>Delete</h4>
    </div>
    <div>
      {showBook && <UpdateExisting book={book} onUpdate={onUpdate}/>}
    </div>
    </div>
    </>
    
  )
}

export default Book
