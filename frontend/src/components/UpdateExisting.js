import React, { useState } from 'react';

const UpdateExisting = ({ book, onUpdate, onDelete }) => {
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [description, setDescription] = useState(book.description);

  const onSubmit = (e) => {
    e.preventDefault();

    onUpdate({ title, author, description });
  };

  const handleDelete = () => {
    onDelete(book._id);
  };

  return (
    <>
      <form className="form" onSubmit={onSubmit}>
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
        <button className="btn btn-block" onClick={handleDelete}>
          Delete
        </button>
      </form>
    </>
  );
};

export default UpdateExisting;