import { useState} from 'react'

const UpdateExisting = ({book, onUpdate }) => {

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    onUpdate({title, author, description});
  }

  return (
    <>
    <form className="form" onSubmit={onSubmit}>
    <div className="form-container">
        <label>Description</label>
        <textarea key={book._id} className="form-input-description" type="text" placeholder={book.description}></textarea>
      </div>
      <h3 className='h3'>Update the book {book.title}</h3>
      <div className="form-container">
        <label>Title</label>
        <input key={book._id} className="form-input" placeholder={book.title} type="text" value={title} onChange={(e) => setTitle(e.target.value)}></input>
      </div>
      <div className="form-container">
        <label>Author</label>
        <input key={book._id} className="form-input" type="text" placeholder={book.author}  value={author} onChange={(e) => setAuthor(e.target.value)}></input>
      </div>
      <div className="form-container">
        <label>Description</label>
        <input key={book._id} className="form-input" type="text" placeholder={book.description} value={description} onChange={(e) => setDescription(e.target.value)}></input>
      </div>
      <input className="btn btn-block" type="Submit" value="Update" onSubmit={onSubmit}></input>
    </form>
    </>
  )
}

export default UpdateExisting