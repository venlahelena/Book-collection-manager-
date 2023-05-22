import { useState } from 'react';

const AddNew = ({ onNew }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (!title || !author || !description) {
      alert('All fields must be filled');
      return;
    }

    onNew({ title, author, description });
    setTitle('');
    setAuthor('');
    setDescription('');

    alert('New book has been added');
  };

  return (
    <>
      <form className="addnew-form" onSubmit={onSubmit}>
        <h2 className="h2">Add a new Book</h2>
        <div className="addnew-form-container">
          <label className="add-label">Title</label>
          <input
            className="form-input"
            type="text"
            placeholder="Add Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="addnew-form-container">
          <label className="add-label">Author</label>
          <input
            className="form-input"
            type="text"
            placeholder="Add Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="addnew-form-container">
          <label className="add-label">Description</label>
          <input
            className="form-input"
            type="text"
            placeholder="Add Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button className="btn-addnew" type="submit">
          Add new
        </button>
      </form>
      <hr className="addnew-line" />
    </>
  );
};

export default AddNew;
