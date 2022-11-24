import { useState } from 'react'

const UpdateExisting = ({book, onUpdate }) => {

  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [description, setDescription] = useState(book.description);

  const onSubmit = (e) => {
    e.preventDefault();

    onUpdate({title, author, description});
  }

  return (
    <>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-container">
          <label>Description</label>
          <textarea
            key={book._id}
            className="form-input-description"
            type="text"
            placeholder={book.description}
          ></textarea>
        </div>
        <h3 className="h3">Update the book {book.title}</h3>
        <div className="form-container">
          <label>Title</label>
          <input
            key={book._id}
            className="form-input"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <div className="form-container">
          <label>Author</label>
          <input
            key={book._id}
            className="form-input"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          ></input>
        </div>
        <div className="form-container">
          <label>Description</label>
          <input
            key={book._id}
            className="form-input"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></input>
        </div>
        <input
          className="btn btn-block"
          type="Submit"
          defaultValue="Update book"
          onClick={() => onUpdate(book._id, title, author, description)}
        ></input>
      </form>
    </>
  );
}

export default UpdateExisting